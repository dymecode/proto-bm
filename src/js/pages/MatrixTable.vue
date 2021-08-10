<template>
  <div class="columns is-light matrix-table">
    <div class="column is-8">
      <div class="table-container">
        <table class="table is-bordered">
          <thead>
            <tr>
              <th></th>
              <template v-for="col in regions">
                <th :key="col.id">{{ col.name }}</th>
              </template>
            </tr>
          </thead>
          <tbody>
            <template v-for="(row, i) in regions">
              <tr :key="i">
                <th>{{ row.name }}</th>
                <template v-for="(rowcol, j) in regions">
                  <td :key="j">
                    <div class="void-cell" v-if="rowcol.id === row.id"></div>
                    <div class="empty-cell has-background-light" v-else>
                      <button
                        class="button is-light is-small"
                        @click="reveal(row, rowcol)"
                        v-if="j < i"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                      <button
                        class="button is-light is-small"
                        @click="reveal(rowcol, row)"
                        v-if="j > i"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </td>
                </template>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
    <div class="column is-4">
      <article class="message is-dark" v-if="crossId.length > 0">
        <div class="message-header">
          {{ crossId }}
          <button class="delete" @click="reset"></button>
        </div>
        <div class="message-body">
          <p class="title is-4">{{ crossName }}</p>
          <template v-if="getLink(crossId)"></template>
          <template v-else>
            <form @submit.prevent>
              <label class="label">Range</label>
              <div class="buttons has-addons">
                <template v-for="(range, k) in rangeTypes">
                  <button
                    :class="rangeButtonClass(range)"
                    @click="selectRange(range)"
                    :key="k"
                  >
                    <span>{{ range }}</span>
                  </button>
                </template>
              </div>

              <hr class="my-1" />

              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-small is-text" @click="reset">Cancel</button>
                </div>
                <div class="control ml-auto">
                  <button class="button is-small is-success">Submit</button>
                </div>
              </div>
            </form>
          </template>
        </div>
      </article>
      <article class="message is-dark" v-else>
        <div class="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </div>
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MatrixTable",
    data() {
      return {
        rangeTypes: ["Long", "Medium", "Short"],
        crossName: "",
        crossId: "",
        regions: [
          { id: 1, name: "Europe" },
          { id: 2, name: "North Africa" },
          { id: 3, name: "North America" },
          { id: 4, name: "North Asia" },
          { id: 5, name: "Oceania" },
          { id: 6, name: "South Africa" },
          { id: 7, name: "South America" },
          { id: 8, name: "South East Asia" },
          { id: 9, name: "South Asia" }
        ],
        links: [],
        form: {
          ref: "",
          range: ""
        }
      };
    },
    methods: {
      reveal(x, y) {
        this.crossName = x.name + "/" + y.name;
        this.crossId = x.id + "-" + y.id;
      },
      reset() {
        this.crossName = "";
        this.crossId = "";
      },
      getLink(ref) {
        if (this.links.length > 0) {
          this.form = this.links.find(el => el.ref === ref);
          return true;
        } else {
          return false;
        }
      },
      selectRange(val) {
        this.form.range = val;
      },
      rangeButtonClass(val) {
        return this.form.range === val
          ? "button is-small is-info is-selected"
          : "button is-small is-outlined";
      }
    }
  };
</script>

<style lang="scss">
  @use "../../sass/variables" as var;
  .matrix-table {
    padding: 3rem 1rem;
    .table-container {
      overflow: auto;
      scrollbar-width: thin;
      .table {
        table-layout: fixed;

        thead {
          th {
            width: 6rem;
            height: 4rem;
            font-size: 0.75rem;
            line-height: 1.2;
          }
        }
        tbody {
          th {
            width: 6rem;
            height: 4rem;
            font-size: 0.75rem;
            line-height: 1.2;
          }
          td {
            width: 6rem;
            height: 4rem;
            font-size: 0.75rem;
            line-height: 1.2;
            padding: 0;

            .void-cell {
              width: 100%;
              height: 100%;
              background-color: var.$gray-500;
            }

            .empty-cell {
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
          }
        }
      }
    }
    .message {
      box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,.2);
    }
  }
</style>
