import React from 'react';
import NavBar from '../NavBar/NavBar';
import UserPageLinks from '../UserPageLinks/UserPageLinks';
import purchaseHistoryMock from '../../Metasite/purchaseHistoryMock'
import Footer from '../Footer/Footer';
import './UserHistoryPage.css';
import ProductList from '../ProductList/ProductList';
import Paginator from '../Paginator/Paginator';

function UserHistoryPage() {

  return (
    <>
    <div className='userHistoryPageContainer'>
      <NavBar/>
      <div className="userHistoryPageMain">

        <div className='userHistoryPageSections'>
          <UserPageLinks/>
        </div>

        <div className='userHistoryPageData'>
          <div className='userHistoryPageData--products' id="paginated-list" aria-live="polite">
            {
            purchaseHistoryMock.map((product) => <ProductList  key={product.id} product={product}/>)

            }
          </div>
          <div className='userHistoryPageData--paginator'>
            <Paginator/>
          </div>
        </div>

      </div>
      <Footer/>    
    </div>
    </>
  )
}

export default UserHistoryPage