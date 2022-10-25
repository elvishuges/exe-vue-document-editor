<template>
  <div>
    <button @click="print()">P</button>
    {{ pages }}
    <div class="a4-formater-container" id="a4-foramter-printable">
      <div
        v-for="(page, page_idx) in pages"
        :key="page_idx"
        class="a4-formater-page"
        id="a4-formater-0"
        :ref="(elt) => (pages_refs[page.uuid] = elt)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  props: {
    a4Content: { type: String, required: false, default: "" },
  },
  data() {
    return {
      pages: [],
      pages_refs: [],
      currentIdFormater: 0,
      pages_height: 0,
    };
  },
  beforeCreate() {
    this.pages_refs = [];
  },

  async mounted() {
    await this.createFirstPage();

    await this.$nextTick(); // wait for DOM update
    const first_page_elt = this.pages_refs[this.pages[0].uuid];
    first_page_elt.innerHTML = this.a4Content;
    this.pages_height = first_page_elt.clientHeight + 1; // allow one pixel precision
    //await this.populatePages();
  },

  methods: {
    new_uuid: () => Math.random().toString(36).slice(-5),
    async createFirstPage() {
      const firstPage = {
        uuid: this.new_uuid(),
      };
      await this.$nextTick();
      this.pages.push(firstPage);
      await this.$nextTick(); // wait for DOM update
      this.populatePages();
    },

    async populatePages() {
      const page = this.pages[0];
      const page_elt = this.pages_refs[page.uuid];
      let next_page_elt = "";
      if (page_elt.clientHeight > this.pages_height) {
        const next_page = { uuid: this.new_uuid() };
        this.pages.splice(1, 0, next_page);
        await this.$nextTick(); // wait for DOM update
        next_page_elt = this.pages_refs[next_page.uuid];
      }
      console.log("next_page_elt", next_page_elt);
    },
  },

  print() {
    let printable = "a4-foramter-printable";
    let printWindow = window.open();
    // Add the stylesheet link and inline styles to the new document:

    printWindow.document.write(document.getElementById(printable).innerHTML);
    printWindow.document.write("</head><body>");

    printWindow.document.write("</body></html>");

    printWindow.document.close(); // necessary for IE >= 10
    printWindow.focus(); // necessary for IE >= 10*/

    setTimeout(function () {
      printWindow.print();
    }, 500);
  },
};
</script>

<style lang="scss" scoped>
.a4-formater-container {
  padding-top: 10px;
}
.a4-formater-page {
  background: white;
  width: 21cm;
  min-height: 29.7cm;
  display: block;
  margin: 0 auto;
  padding: 10px 25px;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
  box-sizing: border-box;
  font-size: 12pt;
  color: black;
  font-family: "Times New Roman", Times, serif;
}

@media print {
  .page-break {
    display: block;
    page-break-before: always;
  }
}

@media print {
  body {
    margin: 0;
    padding: 0;
  }
  .A4 {
    box-shadow: none;
    margin: 0;
    width: auto;
    height: auto;
  }
  .noprint {
    display: none;
  }
  .enable-print {
    display: block;
  }
}
</style>
