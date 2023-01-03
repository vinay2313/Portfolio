import React from 'react'
import hululogo from '../photos/hululogo.png'
import paratha from '../photos/paratha.jpg'
import expanse from '../photos/expanse.jpg'
import rapido from '../photos/rapido.png'
import todo from '../photos/todo.png'
import ladhidh from '../photos/ladhidh.png'
import amazon from '../photos/amazon.png'
import unplash from '../photos/unplash.webp'
import dictinoary from '../photos/dictionary.jpg'


function Projects() {
  return (

    <>

      <div className='container'>
        <div className='project'>

        <div className='heading'><p>Paratha Store</p>
     <button onClick={()=>window.open("https://parathastore.netlify.app/","_blank")}   className='btn'>Live</button>   
        </div>
        
        <img src={paratha} className='img'/>
      




        </div>
        <div className='project'>

        <div className='heading'><p>Ladhidh Store</p>
     <button onClick={()=>window.open("https://www.ladhidh.store/","_blank")}  className='btn'>Live</button>   
        </div>
        
        <img src={ladhidh} className='img'/>
      




        </div>
        <div className='project'>

        <div className='heading'><p>Expanse Manager Using Redux</p>
     <button onClick={()=>window.open("https://expanse-manager.netlify.app/","_blank")}   className='btn'>Live</button>   
        </div>
        
        <img src={expanse} className='img'/>
      




        </div>
        
         
       
      </div>






      <div className='container'>

      <div className='project'>

<div className='heading'><p>Todo React</p>
<button onClick={()=>window.open("","_blank")}   className='btn'>Live</button>   
</div>

<img src={todo} className='img'/>





</div>
        
        
        
<div className='project'>

<div className='heading'><p>Dictionary</p>
<button onClick={()=>window.open("https://63b3f067238dde48ef34ae4a--eloquent-elf-62fe4b.netlify.app/","_blank")}  className='btn'>Live</button>   
</div>

<img src={dictinoary} className='img'/>





</div>
<div className='project'>

<div className='heading'><p>Rapido Clone</p>
<button onClick={()=>window.open("https://rapido-clone.netlify.app/","_blank")}   className='btn'>Live</button>   
</div>

<img src={rapido} className='img'/>





</div>






      </div>

     <div className='container'>
     <div className='project'>

<div className='heading'><p>Hulu Clone</p>
<button onClick={()=>window.open("https://illustrious-shortbread-78d04d.netlify.app/","_blank")}   className='btn'>Live</button>   
</div>

<img src={hululogo} className='img'/>





</div>
     






<div className='project'>

<div className='heading'><p>Unplash Clone React</p>
<button onClick={()=>window.open("https://unplashclone.netlify.app/","_blank")}   className='btn'>Live</button>   
</div>

<img src={unplash} className='img'/>





</div>
     
<div className='project'>

<div className='heading'><p>Amazon Clone</p>
<button onClick={()=>window.open("https://spectacular-kelpie-27873f.netlify.app/","_blank")}  className='btn'>Live</button>   
</div>

<img src={amazon} className='img'/>





</div>

     </div>















    </>


  );
}


export default Projects