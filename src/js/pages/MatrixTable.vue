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
      <div class="card">
        <div class="card-content">
          <p class="title">{{ crossName }}</p>
          <p class="subtitle">{{ crossId }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MatrixTable",
    data() {
      return {
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
        ]
      };
    },
    methods: {
      reveal(x, y) {
        this.crossName = x.name + "/" + y.name;
        this.crossId = x.id + "-" + y.id;
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
  }
</style>
