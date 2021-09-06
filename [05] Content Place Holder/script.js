const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getDataCard1, 1500)

function getDataCard1() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
  title.innerHTML = 'Lorem ipsum dolor sit amet'
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
  name.innerHTML = 'John Doe'
  date.innerHTML = 'Oct 08, 2020'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}

const header_2 = document.getElementById('header_2')
const title_2 = document.getElementById('title_2')
const excerpt_2 = document.getElementById('excerpt_2')
const profile_img_2 = document.getElementById('profile_img_2')
const name_2 = document.getElementById('name_2')
const date_2 = document.getElementById('date_2')

const animated_bgs_2 = document.querySelectorAll('.animated-bg_2')
const animated_bg_texts_2 = document.querySelectorAll('.animated-bg-text_2')

setTimeout(getDataCard2, 1500)

function getDataCard2() {
  header_2.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
  title_2.innerHTML = 'Lorem ipsum dolor sit amet'
  excerpt_2.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
  profile_img_2.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/50.jpg" alt="" />'
  name_2.innerHTML = 'John Doe'
  date_2.innerHTML = 'Oct 08, 2020'

  animated_bgs_2.forEach((bg) => bg.classList.remove('animated-bg_2'))
  animated_bg_texts_2.forEach((bg) => bg.classList.remove('animated-bg-text_2'))
}