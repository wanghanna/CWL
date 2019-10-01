<template>
  <div id="about" class="about container-fluid">
    <div class="">
      <vs-breadcrumb :items="item" separator="chevron_right"></vs-breadcrumb>
      <div style="">
        <!-- component navbar -->
        <vs-navbar v-model="activeItem" class="nabarx pt-2 row m-0" color="#ffffff">
          <div slot="title" class="col">
            <vs-navbar-title><vs-button line-position="bottom" line-origin="left" color="#268893" type="border"><router-link to="/light" style="color:#268893;text-decoration:none">光源產品</router-link></vs-button>&nbsp;&nbsp;•&nbsp;&nbsp;<vs-button line-position="bottom" line-origin="left" color="#268893" type="filled">零組件產品</vs-button></vs-navbar-title>
          </div>
          <vs-navbar-item index="0">
            <vs-button
              :class="btns"
              :color="btnc" :type="btnt"
              v-on:click="all"
              >零組件 - 全部產品</vs-button
            >
          </vs-navbar-item>
          </vs-navbar>
          <!-- content -->
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium asperiores aliquam rerum eius iusto adipisci suscipit et dolor maiores, eveniet placeat doloremque odit quas amet eum enim sed quod praesentium. Unde architecto labore fugiat vitae nihil in sint libero facilis, expedita suscipit doloremque repellendus tempore ea, numquam, maxime ullam? Quisquam quis quidem harum nesciunt similique, voluptatibus ut saepe fuga amet mollitia praesentium quasi consequuntur corporis accusantium expedita ullam facere dolorum cumque aperiam minima. Nulla esse minima minus cupiditate sint omnis veritatis dolorem perferendis voluptatem atque nostrum laborum labore animi velit placeat, corrupti similique. Laboriosam odit labore cum error cupiditate non, ullam consequuntur pariatur cumque doloribus corrupti fuga harum unde sint enim amet explicabo architecto molestias vel sequi numquam. Illo accusamus qui placeat, alias facilis ea voluptas sed blanditiis velit saepe assumenda fuga. Perspiciatis quis impedit ea earum dolorum voluptates pariatur adipisci voluptate? Nam ducimus corrupti fugiat, ea natus itaque rerum molestias! Hic, soluta tempore facere fugit minima suscipit voluptatibus quam aliquam tenetur quidem odit, repellendus sequi maxime magnam laboriosam cupiditate adipisci, inventore delectus! Facilis, totam! Perspiciatis repudiandae maxime ab tempore? Dolorum quidem quod magnam quia reiciendis obcaecati dicta reprehenderit ad consequatur quae exercitationem nisi officiis corporis dolorem, commodi, tempora deleniti doloremque aut distinctio assumenda omnis esse! Accusamus, cumque. Atque accusamus dolor recusandae molestiae quos officiis aperiam quidem delectus deleniti illum vel perspiciatis nobis adipisci eius ad neque itaque aliquam aspernatur sed fuga molestias repellendus, nesciunt labore minus! Doloribus iure minima quibusdam ea, voluptatem at accusantium deserunt vitae minus, perspiciatis deleniti nam iusto reiciendis! Temporibus magni suscipit quam commodi illum exercitationem labore, quos beatae fugiat omnis incidunt natus adipisci quisquam rerum inventore fuga animi perferendis? Vitae natus enim, iure quidem eaque iste temporibus ullam ad provident, odio sint. Aspernatur, nulla ullam et eos rerum laboriosam minima adipisci? Ea incidunt itaque consectetur cupiditate asperiores quas, odio error provident porro, ipsam delectus distinctio veniam tempora fugit reiciendis minus dolor facere? Ad unde alias, iure, blanditiis veniam atque adipisci asperiores nesciunt minima maxime itaque architecto nobis. Odit debitis voluptates ullam ducimus eaque facilis magnam dignissimos, cum dolor libero dolorem fugit harum sint pariatur aspernatur, praesentium at ab doloribus quisquam cupiditate facere corporis adipisci quasi ut. Exercitationem odit dignissimos, quod quos aliquam dolor dolorum. Iusto suscipit blanditiis ut atque nesciunt! Corrupti cumque nam nobis ut omnis, error labore, molestiae voluptate quod quisquam, assumenda dolor. Harum cum similique, doloribus nihil consequatur libero, saepe nam dicta quia numquam vero? Consequuntur, iure pariatur? Quibusdam optio molestias perspiciatis mollitia labore delectus debitis temporibus laudantium tempore libero dolore, commodi aperiam doloremque et amet alias corrupti corporis. Voluptatum eveniet, ipsa rem, mollitia dolorem corporis error perferendis iusto, quidem illum odit deleniti. Iure velit ea officiis vero. Excepturi, possimus deserunt, similique consequatur accusamus vero, obcaecati sunt officiis nisi atque fugit voluptate cumque perspiciatis asperiores doloremque ea quis enim soluta ad sequi! Repellat, voluptatibus doloribus obcaecati nostrum minima eius facere provident exercitationem quidem laboriosam iure harum assumenda earum odit, facilis qui iusto fugit omnis nesciunt illo similique. Expedita velit corporis neque in nisi?
          </div>
      </div>
      </div>

  </div>
</template>
<script>

export default {
  data(){
      let btns = "m-1";
    let btnc = "#268893";
    let btnt = "flat";
    let item = [
      { title: "首頁", url: "#/idx"},
      { title: "產品介紹", url: "#/light", disabled: true },
      { title: "零組件產品", url: "#/component", disabled: true },
    ];
    return{
      btns,
      btnc,
      btnt,
      item
    }
  }
};
</script>