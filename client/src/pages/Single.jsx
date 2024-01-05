import React from 'react'
import Edite from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import { Menu } from '../component/Menu'

export default function Single() {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        <div className="user">
          <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt=""/>
          <div className="info">
            <span className="username">John Doe</span>
            <p className="date">5 minutes ago</p>
          </div>
          <div className="edite">
            <Link to='/write?edite=2'>
              <img src={Edite} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1 className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum.</h1>
        <p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto similique velit, minima dolorem quasi tenetur sint dignissimos temporibus quibusdam nemo blanditiis hic iure, aut, doloribus rerum molestiae tempore placeat.</p>
          <p>Deleniti, maxime amet quo nam velit distinctio praesentium. Cum officia tenetur incidunt itaque doloremque. Ex, possimus similique repudiandae obcaecati eligendi suscipit dolore itaque fugit consectetur quibusdam in facere libero!</p>
          <p>Nihil maiores harum maxime voluptate vitae quidem temporibus repudiandae quis, corporis iure quia quos veniam commodi, iste consequatur delectus alias pariatur nam ex animi. Sequi assumenda cumque sed! Possimus. 
          Nihil maiores harum maxime voluptate vitae quidem temporibus repudiandae quis, corporis iure quia quos veniam commodi, iste consequatur delectus alias pariatur nam ex animi. Sequi assumenda cumque sed! Possimus.
          </p>
          <p>Perferendis excepturi aut libero. Deserunt numquam debitis voluptatum nihil corporis tempora quam, cum, architecto minima sunt rerum vel, eum suscipit aperiam quas nostrum. Ratione eligendi voluptatem in odio magni?</p>
          <p>Iure vitae fugit earum libero illum, sapiente minima, rem sequi eum repellendus quia sit exercitationem quas eius magnam reiciendis qui dolores! Harum quod, accusantium facere officiis eum officia animi!</p>
        </p>
        </div>
      <Menu />
    </div>
  )
}
