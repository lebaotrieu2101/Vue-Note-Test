<template>
  <div class="ui basic content center aligned segment">
    <button class="ui teal basic button icon" @click="showModel">
      <i class="plus icon"></i>
    </button>
    <div class="ui centered card" v-show="shhielemnt">
      <div class="content">
        <div class="ui form">
          <div class="field">
            <label>Title</label>
            <input type="text" v-model="titleT">
          </div>
          <div class="field">
            <label>Description</label>
            <input type="text" v-model="descriptionText">
          </div>
          <div class="ui two buttons">
            <button class="ui green button" @click="SendDataModel">
              Create
            </button>
            <button class="ui black button" @click="closeModel">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleT: "",
      descriptionText: "",
      shhielemnt: false,
    };
  },
  methods: {
    showModel() {
      this.shhielemnt = true;
    },
    closeModel() {
      this.shhielemnt = false;
    },
    SendDataModel() {
      if (this.titleT.length > 0 && this.descriptionText.length > 0) {
        const title = this.titleT;
        const description = this.descriptionText;

        this.$emit("SeDataToCnote", {
          title,
          description,
        });

        // Clean fields
        this.titleT = "";
        this.descriptionText = "";
        this.shhielemnt = false;
      }
    },
  },
};
</script>

<style scoped>
/* Import Semantic UI CSS (assuming you have it included in your project) */
@import url('https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css');
</style>
