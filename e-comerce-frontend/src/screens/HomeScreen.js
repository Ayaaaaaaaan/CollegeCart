import './HomeScreen.css'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link,useHistory } from 'react-router-dom'; //added

// Components
import Product from '../components/Product'

//Actions
import {getProducts as listProducts} from '../redux/actions/productActions'
import {setUserDeatils} from '../redux/actions/userAction'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const getProducts = useSelector(state => state.getProducts)
  const {products, loading, error} = getProducts

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  useEffect(() => {
    dispatch(setUserDeatils())
  }, [dispatch])

  const history = useHistory(); // Get the history object

  const handleCollegeChange = event => {
    const selectedCollege = event.target.value;

    if (selectedCollege === 'vit') {
      history.push('/vit');
    } else if (selectedCollege === 'iits') {
      history.push('/iits');
    } else if (selectedCollege === 'bits') {
      history.push('/bits');
    }
  };

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products on CollegeCart</h2>
      <div>
      
      <label>
            In which College you want your order to be delivered ?
          <select onChange={handleCollegeChange}>
            <option value="vit">VIT</option>
            <option value="iits">IITS</option>
            <option value="bits">BITS</option>
          </select>
        </label>

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

export default HomeScreen
