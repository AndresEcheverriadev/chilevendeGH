import React, { useMemo, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import UserPageLinks from '../UserPageLinks/UserPageLinks';
import { CartContext } from '../CartContext/CartContext';
import purchaseHistoryMock from '../../Metasite/purchaseHistoryMock'
import ProductList from '../ProductList/ProductList';
import Pagination from '../Pagination/Pagination';
import Footer from '../Footer/Footer';
import './UserHistoryPage.css';

let PageSize = 10;



function UserHistoryPage() {

  const {subTotalItem} = useContext(CartContext);

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return purchaseHistoryMock.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
    <div className='userHistoryPageContainer'>
      <NavBar/>
      <div className="userHistoryPageMain">

        <div className='userHistoryPageSections'>
          <UserPageLinks/>
        </div>

        <div className='userHistoryPageData'>

          <div className='userHistoryPageData--products'>
            {
            currentTableData.map((product) =>  <div className='productListContainer'>
                                                      <NavLink to={`/${product.category}/${product.name}`}><h6 className='productListTitle'>{product.name}</h6></NavLink>
                                                      <img className='productListThumb' src={product.image} alt="" />
                                                        <div className='productListQuantity'>
                                                            <h6>${product.price}</h6>
                                                            <h6>x{product.cantidadCompra}</h6>
                                                            <h6 className='cartItemSubtotal--checkout'>Subtotal ${subTotalItem(product)}</h6>
                                                        </div>
                                                  </div>)

            }
          </div>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={purchaseHistoryMock.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
          />
        </div>
      </div>
      <Footer/>    
    </div>
    </>
  )
}

export default UserHistoryPage