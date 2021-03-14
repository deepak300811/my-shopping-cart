import "./App.css"
import SingleItem from "./components/SingleItem/SingleItem"
import axios from "axios"
import { useEffect, useState } from "react"
import Footer from "./components/Footer/Footer"
import Overlay from "./components/Overlay/Overlay"
import Loader from "./components/Loader/Loader"
function App() {
  const [productList, setProductList] = useState([])
  const [totalQuantityCount, setTotalQuantityCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [showPopup, setShowPopup] = useState(false)
  useEffect(() => {
    axios
      .get("https://mobiotics-fake-server.herokuapp.com/products")
      .then(res =>
        setProductList(prev => {
          prev = res.data
          // console.log(prev)
          return prev
        })
      )
      .catch(error => console.log(error))
  }, [])
  const handleItemAction = (id, action) => {
    console.log(id)
    setProductList(
      productList.map(item => {
        if (item.id === id) {
          if (action === "+") {
            item.count++
            setTotalQuantityCount(prev => prev + 1)
            setTotalPrice(prev => prev + item.Price)
          } else {
            item.count--
            setTotalQuantityCount(prev => prev - 1)
            setTotalPrice(prev => prev - item.Price)
          }
        }
        return item
      })
    )
  }

  const resetAfterTransaction = () => {
    setShowPopup(false)
    setTotalPrice(0)
    setTotalQuantityCount(0)
    setProductList(
      productList.map(item => {
        item.count = 0
        return item
      })
    )
  }
  return (
    <div className="App ">
      <div className="container">
        {productList.length === 0 ? (
          <Loader />
        ) : (
          productList.map(item => {
            // console.log(productList)
            return (
              <SingleItem
                product={item}
                key={item.id}
                itemAction={handleItemAction}
              ></SingleItem>
            )
          })
        )}
      </div>
      {productList.length === 0 ? null : (
        <Footer
          totalQuantityCount={totalQuantityCount}
          totalPrice={totalPrice}
          setShowPopup={setShowPopup}
          showPopup={showPopup}
        />
      )}
      <Overlay
        totalPrice={totalPrice}
        setShowPopup={setShowPopup}
        showPopup={showPopup}
        resetAfterTransaction={resetAfterTransaction}
      ></Overlay>
    </div>
  )
}

export default App
