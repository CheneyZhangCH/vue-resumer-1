<template>
  <div id="preview" :class="{active: previewUI}" v-show="loginUI === false">
    <div class="preview-wrapper">
      <section class="close-icon-wrapper" @click="closePreview()" v-show="previewUI">
        <i class="el-icon-close" v-show="previewUI"></i>
      </section>
      <div class="resume-preview">
        <div class="left-part">
          <section class="profile-wrapper">
            <div v-if="resume.profile">
              <h1 class="main-name">
                {{resume.profile.name}}
              </h1>
              <p class="user-info">
                <span>{{resume.profile.title}} </span>
                <span>  |  </span>
                <span> {{resume.profile.age}} </span>
                <span>  |  </span>
                <span> {{resume.profile.sex}}</span>
              </p>
            </div>
          </section>
          <section class="contact-wrapper" v-if="resume.contacts">
            <p class="contact-item">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-dianhua"></use>
              </svg>
              <span class="contact-content"> | {{resume.contacts.phone}}</span>
            </p>
            <p class="contact-item">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weixin"></use>
              </svg>
              <span class="contact-content"> | {{resume.contacts.wechat}}</span>
            </p>
            <p class="contact-item">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-qie"></use>
              </svg>
              <span class="contact-content"> | {{resume.contacts.qq}}</span>
            </p>
            <p class="contact-item">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-youxiang1"></use>
              </svg>
              <span class="contact-content"> | {{resume.contacts.email}}</span>
            </p>
            <p class="contact-item">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-dizhi1"></use>
              </svg>
              <span class="contact-content"> | {{resume.contacts.location}}</span>
            </p>
          </section>
          <section class="skill-wrapper" v-if="resume.skills">
            <h2 class="title-item">SKILLS</h2>
            <ul class="skill-item-wrapper">
              <li class="skill-item" v-for="item in resume.skills">
                <h4 class="skill-name"> {{item.name}}</h4>
                <el-slider :value="item.content"></el-slider>
                <hr>
              </li>
            </ul>
          </section>
        </div>
        <div class="right-part">
          <h1>WORK & EDUCATIONS & PROJECTS</h1>
          <section v-if="resume.jobs">
            <h2>工作经验</h2>
            <ul>
              <li v-for="item in resume.jobs">
                <h4> {{item.name}}</h4>
                <h4> {{item.from}}</h4>
                <p>至</p>
                <h4> {{item.to}}</h4>
                <h4> {{item.content}}</h4>
              </li>
            </ul>
          </section>
          <section v-if="resume.educations">
            <h2>教育背景</h2>
            <ul>
              <li v-for="item in resume.educations">
                <h4> {{item.name}}</h4>
                <h4> {{item.from}}</h4>
                <p>至</p>
                <h4> {{item.to}}</h4>
                <h4> {{item.content}}</h4>
              </li>
            </ul>
          </section>
          <section v-if="resume.projects">
            <h2>项目经历</h2>
            <ul>
              <li v-for="item in resume.projects">
                <h4> {{item.name}}</h4>
                <h4> {{item.content}}</h4>
              </li>
            </ul>
          </section>


        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {}
    },
    computed: {
      resume() {
        return this.$store.state.resume
      },
      loginUI() {
        return this.$store.state.loginUI
      },
      previewUI() {
        return this.$store.state.previewUI
      }
    },
    methods: {
      closePreview() {
        this.$store.commit('closePreview')
      }
    }
  }

</script>

<style scoped lang="scss">
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .resume-preview {
    display: flex;
    align-items: flex-start;
    background: white;
    .left-part {
      width: 300px;
      border-radius: 4px;
      border: 1px solid;
      background: hsla(0, 0%, 0%, 0.2);
      .profile-wrapper {
        height: 240px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        .main-name {
          text-align: center;
          font-size: 40px;
        }
        .user-info {
          font-size: 16px;
          text-align: center;
        }
      }
      .contact-wrapper {
        height: 240px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-top-right-radius: 320px 40px;
        background: white;
        background-image: -webkit-gradient(
            linear, //表示渐变的为直线 另外一个值是radial
            50% 0, //直线型渐变的起点位置 后边有一个属性background-size规定背景的大小，30 X 15px  50% 0 都是乘以父元素的宽高。
            0 100%, //结束点的位置 和上类似
            from(transparent), //起点的颜色
            color-stop(.5, transparent), //中间某一个点必须达到这个颜色，表示变化过程  .5b表示这个渐变范围长度的总长的50%
            color-stop(.5, hsla(0, 0%, 0%, 0.2)), //同上
            to(hsla(0, 0%, 0%, 0.2))), //结束段的颜色
          //一个背景块的分为两个15X 15  组成。

        -webkit-gradient(linear, 50% 0, 100% 100%, from(transparent),
            color-stop(.5, transparent),
            color-stop(.5, hsla(0, 0%, 0%, 0.2)),
            to(hsla(0, 0%, 0%, 0.2)));
        background-size: 16px 8px;
        background-repeat: repeat-x;
        background-position: 0 100%;
        .contact-item {
          width: 252px;
          height: 36px;
          font-size: 16px;
          line-height: 36px;
          display: flex;
          align-items: center;
          svg {
            width: 36px;
          }
        }
      }
      .skill-wrapper {
        display: flex;
        justify-content: center;
        flex-direction: column;
        .title-item {
          width: 252px;
          margin: 16px auto;
          text-align: center;
        }
        .skill-item-wrapper {
          width: 252px;
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          .skill-item {
            width: 252px;
            margin-top: 16px;
            .skill-name {
            }
            .skill-rating {
              width: 252px;
            }
          }
        }
      }
    }
    .right-part {
      margin-left: 8px;
      border: 1px solid;
      flex: 1;
    }
  }

  .active {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    > .preview-wrapper {
      position: relative;
      width: 1280px;
      margin-left: auto;
      margin-right: auto;
      border: 1px solid;
      display: flex;
      .left-part {
        width: 300px;
      }
      .close-icon-wrapper {
        position: absolute;
        right: -64px;
        top: 16px;
        width: 40px;
        height: 40px;
        border: 1px solid;
        border-radius: 4px;
        background: #000;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        .el-icon-close {
          font-size: 24px;
          line-height: 24px;
        }
      }
    }
  }


</style>
