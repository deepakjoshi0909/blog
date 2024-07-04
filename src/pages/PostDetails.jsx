import React from 'react'
import PostAuthors from '../Components/PostAuthors'
import { Link } from 'react-router-dom'
import Thumbnail from '../mern-blog-assets-main/blog22.jpg'

const PostDetails = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail_container">
        <div className="post-detail_header">
          <PostAuthors/>
          <div className="post-detail_buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
            
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail_thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, debitis. Quisquam voluptate officia at doloribus eligendi alias libero porro, dolor consequuntur, debitis atque odio assumenda, ut id ipsam mollitia deleniti. Itaque iste perspiciatis sint accusamus totam vitae quia eos sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nisi accusantium itaque reiciendis, rem saepe quod fuga obcaecati quas, quo provident voluptas deleniti esse eveniet suscipit doloremque aperiam optio alias sit temporibus iure. Iure iusto corporis soluta, mollitia suscipit earum consequatur natus possimus libero itaque ut ad voluptas error, deleniti aliquam rem eos, ipsa rerum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque voluptas vitae dolores dolorum nihil provident neque labore ex cumque laudantium, consectetur assumenda eius? Deserunt odio excepturi adipisci dolores error quod explicabo unde exercitationem voluptate quia at, veniam ipsa laudantium? Assumenda vitae labore laudantium in voluptates provident officiis culpa nihil aut, odit hic veritatis nulla similique error voluptate. Nostrum officia ratione inventore magni eligendi facilis odio rerum possimus explicabo, ipsum sapiente! Dignissimos id voluptatibus unde eum esse magni, magnam modi rem molestias natus quis facilis aliquam laudantium dolorem dolorum. Eaque odio quam accusantium, maxime aliquam a, enim pariatur veniam soluta voluptas atque id. Et optio ullam quisquam cupiditate reiciendis eaque dignissimos.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque autem voluptas debitis, libero hic incidunt earum non consequatur blanditiis ipsa?</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor praesentium, vero numquam modi autem impedit animi officiis laboriosam facere minima ad, omnis ex deleniti illo ipsam, corporis molestias. Esse aut est, modi saepe nobis autem deleniti error laudantium minus voluptatum quidem possimus? Dolorum autem esse fugiat delectus eius nam cum porro enim veritatis aliquid, molestiae beatae nemo nisi facilis in. Odio, iure placeat tempora dolorem dicta, eaque impedit atque culpa aliquid veniam ut quam esse dolor necessitatibus harum ratione porro vitae explicabo fuga! Alias facere placeat natus suscipit neque repudiandae, vero ullam sunt est dolorum totam dignissimos repellat, corporis quo non quia, numquam molestiae nobis dolor. Tempore placeat sed commodi inventore amet totam praesentium a harum temporibus aliquid, odit nostrum voluptates voluptate natus explicabo sint quos numquam quibusdam expedita enim vel ipsam assumenda. Optio vero, magnam, officiis dolorem necessitatibus eveniet soluta unde harum totam veniam labore voluptates, eligendi esse? Dolor, blanditiis molestiae! Voluptatibus quam iusto nisi, non, laboriosam voluptates exercitationem incidunt a, quo reiciendis labore facilis consectetur ipsam blanditiis repudiandae asperiores neque placeat eaque modi dolor excepturi illum aspernatur sequi? Ipsam quibusdam quaerat accusantium sit nam, minus dolore labore eaque maiores culpa, eum cumque mollitia sint delectus, blanditiis quam doloribus.
      </div>
    </section>
  )
}

export default PostDetails
