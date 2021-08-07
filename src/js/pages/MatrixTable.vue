<template>
  <section class="section is-light matrix-table">
    <div class="table-container">
      <table class="table is-bordered">
        <thead>
          <tr>
            <th></th>
            <template v-for="(col, index) in regions">
              <th :key="index">{{ col }}</th>
            </template>
          </tr>
        </thead>
        <tbody>
          <template v-for="(row, i) in regions">
            <tr :key="i">
              <th>{{ row }}</th>
              <template v-for="(rowcol, j) in regions">
                <td :key="j">
                  <div class="void-cell" v-if="rowcol === row"></div>
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
    <span class="title">{{ cross }}</span>

  </section>
</template>

<script>
  export default {
    name: "MatrixTable",
    data() {
      return {
        cross: "",
        regions: [
          "Europe",
          "North Africa",
          "North America",
          "North Asia",
          "Oceania",
          "South Africa",
          "South America",
          "South East Asia",
          "South Asia"
        ]
      };
    },
    methods: {
      reveal(x, y) {
        this.cross = x + "/" + y;
        this.showModal();
      }
    }
  };
</script>

<style lang="scss">
  @use "../../sass/variables" as var;
  .matrix-table {
    .table {
      table-layout: fixed;

      thead {
        th {
          width: 6rem;
          height: 4rem;
          font-size: 0.75rem;
          line-height: 1.2;
          vertical-align: bottom;
          text-align: center;
        }
      }
      tbody {
        th {
          width: 6rem;
          height: 4rem;
          font-size: 0.75rem;
          line-height: 1.2;
          vertical-align: middle;
          text-align: right;
        }
        td {
          width: 4rem;
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
</style>
