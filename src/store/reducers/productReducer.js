const initState = {
  products: [
    {
      id:1, 
      title:"Розовое мыло",
      price: 300,
      image: "mug1.jpg"
    },
    {
      id:2, 
      title:"Мыло с кристаллами",
      price: 400,
      image: "mug2.jpg"
    },
    {
      id:3, 
      title:"Декоративное мыло",
      price: 250,
      image: "mug3.jpg"
    },
    {
      id:4, 
      title:"Йогуртовое мыло",
      price: 422,
      image: "mug4.jpg"
    }
  ]
}

const productReducer = (state = initState, action) => {
  return state 
}
export default productReducer 