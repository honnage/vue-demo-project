<template>
  <div id="demo9">
    <ul>
      <li v-for="(item, index) in ['Angular', 'Vue', 'React']" :key="index">
        {{ item }}
      </li>
    </ul>
    <hr />
    <ul>
      <li v-for="(item, index) in mCourses" :key="index">
        {{ item }}
      </li>
    </ul>
    <hr />
    <ul>
      <li v-for="(item, index) in mCourses1" :key="index">
        {{ item.title }}, {{ item.price }}
      </li>
    </ul>
       <hr />
    <ul>
      <li v-for="({title, price}, index) in mCourses1" :key="index">
        {{ title }}, {{ price }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Demo9",
  data() {
    return {
      mCourses: ["ios", "android", "flutter", "ios"],
      mCourses1: [
         {title:"ios", price:11}, 
         {title:"android", price:15}, 
         {title:"flutter", price:20}]
    };
  }
};
</script>

<style></style>
