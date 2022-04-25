import Button from "../atoms/button"

export default function Color(params) {
    return(
        <div className='wrap-btn'>
          <div className='container-btn'>
            <p>{`<Button color=”default” />`}</p>
            <Button color='default'>Default</Button>
          </div>
          <div className='container-btn ml-10'>
            <p>{`<Button color=”primary” />`}</p>
            <Button color='primary'>Primary</Button>
          </div>
          <div className='container-btn ml-10'>
            <p>{`<Button color=”secondary” />`}</p>
            <Button color='secondary'>Secodary</Button>
          </div>
          <div className='container-btn ml-10'>
            <p>{`<Button color=”danger” />`}</p>
            <Button color='danger'>Danger</Button>
          </div>
        </div>
    )
}