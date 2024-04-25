import Badge from './components/Badge/Badge'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import Testimonial from './components/Testimonial/Testimonial'
import figmaImage from "./components/Testimonial/assets/Image.png"
import ToolTip from './components/ToolTip/ToolTip'
import Toast from './components/Toast/Toast'
import './App.css'

export default function App() {
  const badgeEl = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"].map(color => {
    return (
      <div className='badge-color-container'>
          <Badge type="square" color={color}>
            <p>Square Blue</p>
          </Badge>

          <Badge type="pill" color={color}>
            <p>Pill Red</p>
          </Badge>
        </div>
    )
  })

    const toolTipEl = ["black", "blue", "purple", "green"].map(color => {
      return (
        <div className='tool-tip-color-container'>
          <ToolTip color={color} style="bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique optio rerum sit dicta consectetur nam veritatis, hic commodi quia voluptatem doloribus voluptate fugit laborum explicabo fuga impedit quam cupiditate eius.
          </ToolTip>
          <ToolTip color={color} style="light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique optio rerum sit dicta consectetur nam veritatis, hic commodi quia voluptatem doloribus voluptate fugit laborum explicabo fuga impedit quam cupiditate eius.
          </ToolTip>
        </div>
      )
    })

    const toastEl = [["success", "Your work has been saved"], 
                      ["warning", "A network error was detected"], 
                      ["information", "Please read updated information"],
                       ["error", "Please re-save your work again"]].map(message => {
      return (
        <Toast type={message[0]}>
            {message[1]}
          </Toast>
      )
    })

  return (
    <div className="display-div">

      <div className='badge-display'>
        {badgeEl}
      </div>
  

      <Banner status="success">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam et ipsam exercitationem fugiat libero commodi est cupiditate.
      </Banner>

      <Banner status="warning">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam et ipsam exercitationem fugiat libero commodi est cupiditate.
      </Banner>

      <Banner status="error">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam et ipsam exercitationem fugiat libero commodi est cupiditate.
      </Banner>

      <Banner status="neutral" title="Custom Title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam et ipsam exercitationem fugiat libero commodi est cupiditate.
      </Banner>

      <Banner>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam et ipsam exercitationem fugiat libero commodi est cupiditate.
      </Banner>

      <Card title="Easy Deployment">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, eligendi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, eligendi.</p>
      </Card>

      <Card title="Google Deployment" icon="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" iconColor="green" imagePosition='bottom'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, eligendi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, eligendi.</p>
      </Card>

      <Testimonial img={figmaImage}>
        <div className='testimonial-content'>
          <p className='test-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolores ea aut corporis doloremque quaerat vero similique provident harum totam sequi reprehenderit ab, perferendis debitis fuga eaque odit officiis sed?</p>
          <div className='test-author-container'>
            <p className='test-author'>May Andrews</p>
            <p className='test-job'>Workcation, CTO</p>
          </div>
        </div>
      </Testimonial>

      <div className='tool-tip-display'>
        {toolTipEl}
      </div>

      <div className='toast-display'>
        {toastEl}
      </div>

    </div>
  )
}