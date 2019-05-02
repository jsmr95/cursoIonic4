import { Injectable } from '@angular/core';
let data = require('./data.json');

let { of } = require('rxjs');
let { map, flatMap, zip } = require('rxjs/operators');

@Injectable({
  providedIn: 'root'
})
export class ForoService {

  constructor() {
    console.log(data)






 }

 public getBrandsFromServer() {
   return of(data.brands);
 };

 public getPostsFromServer() {
   return of(data.posts);
 };




 public getPostsWithOutBrands() {

   return this.getPostsFromServer()
     .pipe(flatMap((posts) => {
     return this.getBrandsFromServer().pipe(zip(of(posts)));
   }), map((brandsAndPosts) => {
     const [brands, posts] = brandsAndPosts;
     posts.map((post) => {
       for(let i = 0; i < brands.length; i++){
         if(post.mensaje.includes(brands[i].name) && !brands[i].isSoldBuyUs){
           let len = brands[i].name.length;
           let sustituto = '';
           for(let j = 0; j < len; j++){
             sustituto += '*';
           }
           post.mensaje = post.mensaje.replace(brands[i].name, sustituto);
         }
       }
     });
     return posts;
   }));
 };


}
