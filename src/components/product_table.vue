<template>
  <router-view></router-view>
  <v-card flat title="All Products" class="text-red">
    <template v-slot:append>
        <v-btn @click="openDialog" elevated prepend-icon="mdi-plus-box" color="error" class="ma-2">ADD Product</v-btn>
        <v-btn @click="openBrand" elevated prepend-icon="mdi-view-list" color="error" class="ma-2">Brands</v-btn>
    </template>
    
    <template v-slot:text>
      <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" single-line  variant="outlined" hide-details ></v-text-field>
    </template>

    <v-data-table :headers="headers" :items="cctvlist" :search="search" class="ma-5">
      <template v-slot:item.image="{ item }">
      <v-img :src="item.image" width="150" height="150" />
      </template>

      <template v-slot:item.action ="{ item }">
        <v-btn @click="openDialog" variant="tonal" class="me-2" color="error" prepend-icon="mdi-pencil">Edit</v-btn>
        <v-btn @click="unlist(item.id)" variant="elevated" color="error" prepend-icon="mdi-delete">Unlist</v-btn>
      </template>
    </v-data-table>
  </v-card>

  <!-- Dialog for the form -->
  <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="text-error">Add Products</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="userName" :rules="rules" label="Product Name"></v-text-field>
            <!-- Description -->
            <v-textarea v-model="description" label="Description"></v-textarea>
            <!-- Image -->
            <v-file-input v-model="image" label="Image" class=""></v-file-input>
            <!-- Brands Dropdown -->
            <v-select v-model="brand" :items="brands" label="Brands"></v-select>
            <!-- Quantity -->
            <v-text-field v-model="quantity" label="Quantity" type="number"></v-text-field>
            <!-- Price -->
            <v-text-field v-model="price" label="Price" type="number"></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <!-- BUTTONS -->
          <v-btn variant="tonal" class="mx-2 mb-2 d-flex" color="error"  @click="closeDialog">Cancel</v-btn>
          <v-btn variant="elevated" class="mx-2 mb-2" color="error"  @click="submitForm">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

<!-- Dialog for the Brand -->
<v-dialog v-model="branddialog" max-width="1000">
      <v-card>
        <v-card-title class="text-error">Manage Brands</v-card-title>
          <v-card-text>
          <v-form>
            <v-row>
            <v-text-field v-model="model" label="Add Brand Name"></v-text-field>
            <v-btn flat="true" size="x-large" color="error">ADD</v-btn>
            </v-row>
          <v-card-title class="text-error ma-0 pa-0">List of Available Brands</v-card-title>
            <!-- Description Textarea -->
            <v-sheet :height="auto" :width="auto" border>
            </v-sheet>
          </v-form>
          </v-card-text>
        <v-card-actions>
          <!-- BUTTONS -->
          <v-btn variant="elevated" class="mx-2 mb-2" color="error"  @click="closeBrand">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

<!-- Dialog for Edit -->
    <v-dialog v-model="modifydialog" max-width="500">
      <v-card>
        <v-card-title class="text-error">Modify Products</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="userName" :rules="rules" label="Product Name"></v-text-field>
            <!-- Description Textarea -->
            <v-textarea v-model="description" label="Description"></v-textarea>
            <!-- Image File Upload -->
            <v-file-input v-model="image" label="Image"></v-file-input>
            <!-- Brands Dropdown -->
            <v-select v-model="brand" :items="brands" label="Brands"></v-select>
            <!-- Quantity Input -->
            <v-text-field v-model="quantity" label="Quantity" type="number"></v-text-field>
            <!-- Price Input -->
            <v-text-field v-model="price" label="Price" type="number"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <!-- BUTTONS -->
          <v-btn variant="tonal" class="mx-2 mb-2 d-flex" color="error"  @click="closeDialog">Cancel</v-btn>
          <v-btn variant="elevated" class="mx-2 mb-2" color="error"  @click="submitForm">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import product_table from '../components/product_table.vue'
import adminnavbar from '../components/navbar.vue'
import appbar from '../components/appbar.vue'
import axios from 'axios'

export default {
  data() {
    return {
      dialog: false,
      branddialog: false,
      model: '',
      description: '',
      image: null,
      brand: null,
      brands: ['Xiaomi', 'Panasonic', 'Hikvision'], // Add your brands here
      quantity: null,
      price: null,
      search: "",
      headers: [
        {key: "model", align: 'start', title: "Model"},
        { key: "image", align: 'center', title: "Image"},
        { key: "name", title: "Brand", align: 'center'},
        { key: "price", title: "Price", align: 'end'},
        { key: "stock", title: "Stocks", align: 'end'},
        { key: "action", title: "Action", align: 'center'},
      ],
      cctvlist: [],
    }
  },
  created(){
    this.getList();
  },
    methods:{
      async getList(){
        const d = await axios.get('getCctvList');
        this.cctvlist = d.data;
      },
      async unlist(id){
        const d = await axios.get('unlistProduct',
        {
          id: id,
        });
        this.getList();
      },
      openDialog() {
        this.dialog = true
        
      },
      closeDialog() {
        this.dialog = false
      },
      submitForm() {
        // Handle form submission logic here
        // You can access form values using this.model, this.description, etc.
        // For example: console.log(this.model, this.description, this.image, this.brand, this.quantity, this.price);
        this.closeDialog()
      },
      openBrand() {
        this.branddialog = true
      },
      closeBrand() {
        this.branddialog = false
      },

      openmodify() {
        this.modifydialog = true
      },
      closemodify() {
        this.modifydialog = false
      }
  },
};
</script>

