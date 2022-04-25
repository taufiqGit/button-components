import Button from "../atoms/button"

export default function WithIcon(params) {
    return(
        <div className='wrap-btn'>
          <div className='container-btn'>
            <p>{`<Button startIcon=”local_grocery_store” />`}</p>
            <Button startIcon='local_grocery_store'>Default</Button>
          </div>

          <div className='container-btn ml-10'>
            <p>{`<Button endIcon=”local_grocery_store” />`}</p>
            <Button endIcon='local_grocery_store'>Default</Button>
          </div>
        </div> 
    )
}