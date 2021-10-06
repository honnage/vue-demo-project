<template>
  <div id="demo6">
    <form v-on:submit.prevent="submit">
      <div>
        <label for="first_name">First Name</label>
        <input type="text" name="first_name" v-model="applicant.first_name" />
      </div>

      <div>
        <label for="first_name">Last Name</label>
        <input type="text" name="last_name" v-model="applicant.last_name" />
      </div>

      <div>
        <label for="sex">Last Name</label>
        <input type="radio" name="sex" value="male" v-model="applicant.sex" />

        <label for="sex">Last Name</label>
        <input type="radio" name="sex" value="female" v-model="applicant.sex" />
      </div>

      <div>
        <select name="courses" v-model="applicant.courses">
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">Vue</option>
        </select>
      </div>

      <!-- <button type="button" @click="applicant = {}">Clear</button> -->
      <button type="button" @click="clear">Clear</button>
      <button type="submit">Submit</button>
    </form>

    <div style="margin-top: 16px; color: red">
      #Spy {{ JSON.stringify(applicant) }}
    </div>
  </div>
</template>

<script>
export default {
  name: "demo5",
  data() {
    return {
      applicant: {
        first_name: "",
        last_name: "",
        sex: "male",
        courses: "react"
      }
    };
  },
  methods: {
    submit() {
        // event.preventDefault();
        alert(JSON.stringify(this.applicant))
    },
    clear() {
      this.applicant = {
        first_name: "",
        last_name: "",
        sex: "male",
        courses: "react"
      };
    }
  }
};
</script>

<style></style>
