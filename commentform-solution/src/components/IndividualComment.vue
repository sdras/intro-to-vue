<template>
  <div>
    <li> 
      <img class="post-img" :src="commentpost.authorImg" /> 
      <small>{{ commentpost.author }}</small>
      <p class="post-comment">"{{ commentpost.text }}"</p>
    </li>
  </div>
</template>


<script>
  export default {
    props: ['commentpost']
  }
</script>