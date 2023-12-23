import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import See from './components/See'
import Basic from './components/Basic'

function App() {
  const [count, setCount] = useState(0)
  const [bas , setBas]=useState({name:"Nike Pegasus Trail 4 GORE-TEX By You" , price :190 , Description : "Make sure your Peg Trail 4 GORE-TEX By You gets the necessary drip it deserves, so you can shimmer from the trailhead to the top. Bright, punchy colors pack a visual pop while unique styling selections, like a splattered midsole and hazard stripe logo, will turn heads, whether you’re walking the dog in the dark rain or racing up a watery path. Responsive Nike React foam and waterproof GORE-TEX help you take your wet run from the road to the trail without breaking your stride." , image : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/93278ef2-586f-4c7e-afe7-29b867668a3b/pegasus-trail-3-mens-trail-running-shoes-QPcRqp.png" , count : 0})
  const [RestFullAPI , setRestFUllAPI]=useState([
    {id:1 , name:"Nike Pegasus 40" , price :130, Description : "A springy ride for any run, the Peg’s familiar, just-for-you feel returns to help you accomplish your goals. This version has the same responsiveness and neutral support you love, but with improved comfort in those sensitive areas of your foot, like the arch and toes. Whether you’re logging long marathon miles, squeezing in a speed session before the sun goes down or hopping into a spontaneous group jaunt, it’s still the established road runner you can put your faith in, day after day, run after run." , image : " https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e93db408-ecf6-4982-b0d0-13a756c9b8c2/pegasus-40-mens-road-running-shoes-mVJdmS.png" , count : 0 },

    {id:2 , name:"Nike Pegasus Trail 4 GORE-TEX" , price : 160 , Description : "The Nike Pegasus Trail 4 GORE-TEX is made for those moments when you don't want to turn back, no matter what. Feel confident even in the most unforeseen weather conditions with waterproof GORE-TEX keeping you dry, so you can run harder for longer and take your wet run from the road to the trail without breaking stride. A waterproof layer paired with a higher ankle gaiter gives you extra coverage so you stay dry." , image : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/504b40e8-1a7f-4039-9f35-43fe7531041d/pegasus-trail-4-gore-tex-womens-waterproof-trail-running-shoes-9knDsQ.png" , count : 0 },

    {id:3 , name:"Nike Pegasus FlyEase" , price :90.97, Description : "Let the Nike Pegasus FlyEase, a balanced and energized ride for any run, help you ascend to new heights. A supportive sensation helps keep your foot contained, while underfoot Air adds a pop to your step as you transition from heel to toe. Nike FlyEase technology acts as a strap, helping secure the fit. Your trusted workhorse with wings is back. Time to fly." , image : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/31b9804b-fb6d-4c9d-8888-110d8e8b2472/pegasus-flyease-mens-easy-on-off-road-running-shoes-extra-wide-744b9V.png" , count : 0 },

    {id:4 , name:"Nike Pegasus 40 (USWNT)" , price : 83.97 , Description : "A springy ride for any run, the Peg’s familiar, just-for-you feel returns to help you accomplish your goals. This version has the same responsiveness and neutral support you love, but with improved comfort in those sensitive areas of your foot, like the arch and toes. Whether you’re logging long marathon miles, squeezing in a speed session before the sun goes down or hopping into a spontaneous group jaunt, it’s still the established road runner you can put your faith in, day after day, run after run. This special USWNT Peg 40 lets you run and rep your national team all at the same time." , image : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/07308933-050c-4050-b0ac-701dbd5003da/pegasus-40-uswnt-mens-road-running-shoes-BWM0x2.png" , count : 0 },

    {id:5 , name:"Nike Pegasus 40 (Chelsea FC)" , price : 140 , Description : "A springy ride for any run, the Peg’s familiar, just-for-you feel returns to help you accomplish your goals. This version has the same responsiveness and neutral support you love, but with improved comfort in those sensitive areas of your foot, like the arch and toes. Whether you’re logging long marathon miles, squeezing in a speed session before the sun goes down or hopping into a spontaneous group jaunt, it’s still the established road runner you can put your faith in, day after day, run after run. This special Chelsea FC Peg 40 lets you run and rep your favorite team all at the same time." , image : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5e29e286-5a63-4430-ba08-fcc5716fc075/pegasus-40-chelsea-fc-mens-road-running-shoes-4gLSvT.png" , count : 0 },

    {id:6 , name:"Nike Pegasus Trail 4 GORE-TEX By You" , price :190 , Description : "Make sure your Peg Trail 4 GORE-TEX By You gets the necessary drip it deserves, so you can shimmer from the trailhead to the top. Bright, punchy colors pack a visual pop while unique styling selections, like a splattered midsole and hazard stripe logo, will turn heads, whether you’re walking the dog in the dark rain or racing up a watery path. Responsive Nike React foam and waterproof GORE-TEX help you take your wet run from the road to the trail without breaking your stride." , image : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/93278ef2-586f-4c7e-afe7-29b867668a3b/pegasus-trail-3-mens-trail-running-shoes-QPcRqp.png" , count : 0 },

    {id:7 , name:"Air Jordan 3 Retro" , price :200 , Description : "Clean and supreme, the AJ3 returns with all of its classic style and grace. Quality leather in the upper—with that luxurious elephant print texture—combines with visible Nike Air in the sole to make a comfortable, everyday icon." , image : "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_441,c_limit/d60813e8-8cb1-4a4d-912e-a9b35b4cdd5f/air-jordan-3-retro-mens-shoes-5M3ZlK.png" , count : 0 },
  
    {id:8 , name:"Nike Air Max 270" , price :160 , Description: "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colors."  ,image : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/yn3xyrwq1i8l6i5txngn/air-max-270-mens-shoes-KkLcGR.png" , count : 0},
  ])
  const forTest={name:"Nike Pegasus Trail 4 GORE-TEX By You" , price :190 , Description : "Make sure your Peg Trail 4 GORE-TEX By You gets the necessary drip it deserves, so you can shimmer from the trailhead to the top. Bright, punchy colors pack a visual pop while unique styling selections, like a splattered midsole and hazard stripe logo, will turn heads, whether you’re walking the dog in the dark rain or racing up a watery path. Responsive Nike React foam and waterproof GORE-TEX help you take your wet run from the road to the trail without breaking your stride." , image : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/93278ef2-586f-4c7e-afe7-29b867668a3b/pegasus-trail-3-mens-trail-running-shoes-QPcRqp.png" , count : 0}
  
  const callBack= (id) => {
    RestFullAPI.filter((item)=>{
        if(item.id==id){
          setBas(item)
        }
    })
  }

  return (
    <div className='main'>
      <div className='button-div'>
        {
          RestFullAPI.map((item)=>{
            return <See key={item.id} data={item} callBack={callBack}/>
          })
        }
      </div>
      <div className='basic-div'>
        <Basic data={bas}/>
      </div>

      
    </div>
  )
}

export default App
