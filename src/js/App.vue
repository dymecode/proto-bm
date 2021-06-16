<template>
  <div class="hello">
    <figure class="hello-logo image is-64x64 mb-2">
      <img class="is-rounded" alt="dyme logo" src="../assets/logo.png" />
    </figure>
    <div class="title">proto-bm</div>
    <div class="columns">
      <div class="column is-4">
        <p class="is-size-5">Sandbox playground for prototype Vue components with Bulma.</p>
      </div>
      <div class="column is-3 is-offset-2">
        <label class="heading">Layouts</label>
        <ul>
          <li>
            <a href="/layouts/imr">Full Hero</a>
          </li>
        </ul>
      </div>
      <div class="column is-3">
        <label class="heading">Documentation</label>
        <ul>
          <li>
            <a
              href="https://bulma.io/"
              target="_blank"
              rel="noopener"
              >Bulma</a
            >
          </li>
          <li>
            <a
              href="https://fontawesome.com/icons?d=gallery"
              target="_blank"
              rel="noopener"
              >Fontawesome Icons</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="level footer">
      <div class="level-left"></div>
      <div class="level-right">
        <div class="level-item acron">{{ acronymMaker("dyme") }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixins from "./mixins";
export default {
  name: "App",
  mixins: [Mixins]
};
</script>

<style lang="scss" scoped>
.hello {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #595959;
  width: 76vw;
  font-size: 1rem;
  font-family: "Newsreader", serif;
  font-kerning: auto;
  padding: 1rem;

  .heading {
      font-family: "Newsreader", serif;
    text-align: left;
    width: 100%;
    font-weight: 700;
    color: lighten(#595959, 10%);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0 0 0 0.5em;
    text-align: left;

    li {
        font-family: "Newsreader", serif;
      line-height: 1.5;
      margin-bottom: 0.5em;
    }
  }

  .footer {
    margin: 2em 0;
    padding: 0.5rem;
    border-top: 1px solid #59595955;
    color: #59595999;
    background-color: transparent;
    display: flex;
    justify-content: flex-end;

    .acron {
        font-family: "Newsreader", serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1rem;
      padding: 0 0.5rem;
      text-transform: lowercase;
    }
  }
}
</style>
