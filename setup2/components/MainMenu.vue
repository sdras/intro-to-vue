<template>
  <div> 
    <header>
      <nuxt-link exact to="/" class="logo">
        <svg class="menusvg stamp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="white" d="M99.2 86.9l-6.7-58.3c-.1-.6-.6-1.1-1.2-1.1h-6.2V12.9c0-.7-.6-1.2-1.2-1.2H64.2V5.5c0-.7-.6-1.2-1.2-1.2H37c-.7 0-1.2.6-1.2 1.2v6.2H16.2c-.7 0-1.2.6-1.2 1.2v14.6H8.7c-.6 0-1.2.5-1.2 1.1L.8 86.9c0 .4.1.7.3 1s.6.4.9.4h17.4l-.7 6c0 .4.1.7.3 1s.6.4.9.4h60c.4 0 .7-.2.9-.4s.3-.6.3-1l-.7-6H98c.4 0 .7-.2.9-.4s.4-.6.3-1zm-35-72.7h18.3v13.3h-9l-.4-3.1c-.1-.6-.6-1.1-1.2-1.1h-7.8l.1-9.1zm-26-7.4h23.5v16.5h-2.5V10.5c0-.7-.6-1.2-1.2-1.2H42c-.7 0-1.2.6-1.2 1.2v12.8h-2.5l-.1-16.5zm18.6 5v11.5H43.2V11.8h13.6zm-39.4 2.4h18.3v9.1H28c-.6 0-1.2.5-1.2 1.1l-.4 3.1h-9V14.2zm2.3 71.6H3.4L9.8 30h16.3l-6.4 55.8zm1.7 7.4l7.7-67.5h41.8l7.7 67.5H21.4zm58.9-7.4L73.9 30h16.3l6.4 55.8H80.3z"/></svg>
      </nuxt-link>
      <ul>
        <li v-for="item in menuitems" :key="item.item">
          <a href="#">{{ item }}</a>
        </li>
      </ul>
     <nuxt-link to="/cart">
        <svg class="menusvg cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="white" d="M29.5 61h47.27c2.8 0 5.23-2.62 5.23-5.6V36.03l-55-7.46v-7.16l-9-3.75c-.77-.32-1.65.04-1.97.8-.32.78.04 1.65.8 1.97L24 23.42v44.4c0 2.8 2.52 5.18 5.5 5.18h3.27c-.66 1-1.05 2.2-1.05 3.5 0 3.55 2.9 6.43 6.44 6.43 3.55 0 6.43-2.88 6.43-6.43 0-1.3-.4-2.5-1.05-3.5H70.1c-.67 1-1.05 2.2-1.05 3.5 0 3.55 2.88 6.43 6.43 6.43s6.44-2.88 6.44-6.43c0-3.38-2.6-6.15-5.92-6.4V70H29.5c-1.34 0-2.5-1-2.5-2.17v-7.5c.76.42 1.6.67 2.5.67zm8.66 18.93c-1.9 0-3.44-1.54-3.44-3.43 0-1.9 1.54-3.44 3.44-3.44s3.43 1.54 3.43 3.44-1.55 3.43-3.44 3.43zm40.76-3.43c0 1.9-1.54 3.43-3.44 3.43s-3.43-1.54-3.43-3.43c0-1.9 1.54-3.44 3.43-3.44 1.9 0 3.44 1.54 3.44 3.44zM27 31.6l52 7.06V55.4c0 1.3-1.1 2.6-2.23 2.6H29.5c-1.22 0-2.5-1.34-2.5-2.6V31.6z"/></svg>
      </nuxt-link>
    </header>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        menuitems : [
          'shirts',
          'shorts',
          'accesories',
          'outerwear'
        ]
      }
    },
  }
</script>

<style scoped>
  header {
    background: #222;
    padding: 5px 10px 10px;
    width: 100vw;
    color: white;
    position: fixed;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-line-pack: center;
        align-content: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  header ul {
    padding-left: 0;
  }
  header a {
    color: white;
    text-decoration: none;
    padding: 0 10px;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  header a:hover {
    color: #E6534B;
  }

  .stamp {
    width: 30px;
    height: 30px;
    margin: 10px;
    float: left;
  }

  .cart {
    width: 40px;
    height: 40px;
    margin: 5px;
  }
</style>
