import "../css/show_blog.css"
// import images from '../images'
function ShowBlog({id,title,description,imagedescription,image}){
    return(
        <>
        <div className="show-container">

        <div><img src={image} alt="image"></img></div>
            
          
                <h2>Title:</h2>
                <div> {title}</div>
            
            
                <h2>Description</h2>
                <div> {description}</div>

            
                <h2>Image Description</h2>
                <div> {imagedescription}</div>
          
            
            
        </div>
        </>
    )
}

export default ShowBlog;