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

    <input type="text" placeholder="Title" v-model="course.title"><br>
    <input type="number" placeholder="Price" v-model="course.price"><br>
    <button @click="addCourse">Submit</button>

    <ul>
      <!-- Destructuring -->
      <li v-for="({ title, price }, index) in dynamicCourses" :key="index">
        {{ title }}, {{ price }} <button @click="removeCourse(index)">x</button>
      </li>
    </ul>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Demo9",
  data() {
    return {
      course: { title: "", price: 0 },
      dynamicCourses: [],

      mCourses: ["ios", "android", "flutter", "ios"],
      mCourses1: [
        { title: "ios", price: 11 },
        { title: "android", price: 15 },
        { title: "flutter", price: 20 }
      ]
    };
  },
  methods: {
    addCourse() {
      this.dynamicCourses.push(this.course);
      this.course = { title: "", price: 0 };
    },
    removeCourse(index) {
      this.dynamicCourses.splice(index, 1);
    }
  }
};
</script>

<style></style>
