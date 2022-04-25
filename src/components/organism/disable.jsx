import Button from "../atoms/button"

export default function Disable(params) {
    return (
        <>
          <div className='wrap-btn'>
            <div className='container-btn'>
                <p>{`<Button disableShadow />`}</p>
                <Button disableShadow>Default</Button>
            </div>
          </div>
          <div className='wrap-btn'>
            <div className='container-btn'>
                <p>{`<Button disable />`}</p>
                <Button disable>Disabled</Button>
            </div>
            <div className='container-btn ml-10'>
                <p>{`<Button variant='text' disable />`}</p>
                <Button variant='text' disable>Disabled</Button>
            </div>
          </div>
        </>
    )
}