import Button from "../atoms/button"

export default function Size(params) {
    return(
        <div className='wrap-btn'>
          <div className='container-btn'>
            <p>{`<Button size=”sm” />`}</p>
            <Button size='sm'>Small</Button>
          </div>
          <div className='container-btn ml-10'>
            <p>{`<Button size=”md” />`}</p>
            <Button size='md'>Medium</Button>
          </div>
          <div className='container-btn ml-10'>
            <p>{`<Button size=”lg” />`}</p>
            <Button size='lg'>Large</Button>
          </div>
        </div>       
    )
}