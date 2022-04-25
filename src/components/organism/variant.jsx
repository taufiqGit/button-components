import Button from "../atoms/button"

export default function Variant(params) {
    return(
        <div className='wrap-btn'>
            <div className='container-btn'>
                <p>{`<Button />`}</p>
                <Button>Default</Button>
            </div>
            <div className='container-btn ml-10'>
                <p>{`<Button variant=”outline” />`}</p>
                <Button variant="outline">Default</Button>
            </div>
            <div className='container-btn ml-10'>
                <p>{`<Button variant=”text” />`}</p>
                <Button variant="text">Default</Button>
            </div>
        </div>        
    )
}