import './HomeScreen.css'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

// Components
import Product from '../components/Product'

//Actions
import {getProducts as listProducts} from '../redux/actions/productActions'
import {setUserDeatils} from '../redux/actions/userAction'

const VITScreen = () => {
  const dispatch = useDispatch()

  const getProducts = useSelector(state => state.getProducts)
  const {products, loading, error} = getProducts

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  useEffect(() => {
    dispatch(setUserDeatils())
  }, [dispatch])

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">VIT Products</h2>
      <div>

{/* <label>

  In which college you want your order to be delivered ????

  <select>

    <option value="vegetable">VIT</option>

    <option value="meat">IITS</option>
    <option value="meat">BITS</option>

  </select>

</label> */}

</div>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map(product => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} CollegeCart by Ayaan Ahmed Ansari. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default VITScreen
