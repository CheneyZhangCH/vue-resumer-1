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
          <section v-if="resume.projects" class="project-wrapper">
            <h2 class="project-title">PROJECTS</h2>
            <ul>
              <li class="project-item" v-for="item in resume.projects">
                <h4 class="project-name">
                  {{item.name}}
                </h4>
                <p class="project-link">
                  <a :href="'http://'+item.content">
                    {{item.content}}
                  </a>
                </p>
                <hr>
              </li>
            </ul>
          </section>
        </div>
        <div class="right-part">
          <section class="work-title">
            <h1>WORK & EDUCATIONS & PROJECTS</h1>
          </section>
          <section v-if="resume.jobs" class="work-wrapper">
            <ul>
              <li class="work-items" v-for="item in resume.jobs">
                <div class="work-period">
                  <p>
                    {{item.from}}
                    <span> ~ </span>
                    {{item.to}}
                  </p>
                </div>
                <div class="circle-border">
                  <div class="circle-item"></div>
                  <div class="border-item"></div>
                </div>
                <div class="work-content">
                  <p class="work-company-name"> {{item.name}}</p>
                  <ul>
                    <li v-for="subItem in item.content.split('\n')">
                      <p>
                        {{subItem}}
                      </p>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>
          <section v-if="resume.educations" class="work-wrapper">
            <ul>
              <li class="work-items" v-for="item in resume.educations">
                <div class="work-period">
                  <p>
                    {{item.from}}
                    <span> ~ </span>
                    {{item.to}}
                  </p>
                </div>
                <div class="circle-border">
                  <div class="circle-item"></div>
                  <div class="border-item"></div>
                </div>
                <div class="work-content">
                  <p class="work-company-name"> {{item.name}}</p>
                  <ul>
                    <li v-for="subItem in item.content.split('\n')">
                      <p>
                        {{subItem}}
                      </p>
                    </li>
                  </ul>
                </div>
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
      width: 225px;
      border-radius: 4px;
      background: hsla(0, 0%, 0%, 0.2);
      .profile-wrapper {
        height: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        .main-name {
          text-align: center;
          font-size: 30px;
        }
        .user-info {
          font-size: 12px;
          text-align: center;
        }
      }
      .contact-wrapper {
        height: 180px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-top-right-radius: 225px 30px;
        background: white;
        background-image: -webkit-gradient(
            linear,
            50% 0,
            0 100%,
            from(transparent),
            color-stop(.5, transparent),
            color-stop(.5, hsla(0, 0%, 0%, 0.2)),
            to(hsla(0, 0%, 0%, 0.2))),
        -webkit-gradient(linear, 50% 0, 100% 100%, from(transparent),
            color-stop(.5, transparent),
            color-stop(.5, hsla(0, 0%, 0%, 0.2)),
            to(hsla(0, 0%, 0%, 0.2)));
        background-size: 12px 6px;
        background-repeat: repeat-x;
        background-position: 0 100%;
        .contact-item {
          width: 189px;
          height: 27px;
          font-size: 12px;
          line-height: 27px;
          display: flex;
          align-items: center;

          svg {
            width: 27px;
          }
        }
      }
      .skill-wrapper {
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: #fdfbfc;
        .title-item {
          width: 189px;
          margin: 12px auto;
          text-align: center;
        }
        .skill-item-wrapper {
          width: 189px;
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          .skill-item {
            width: 189px;
            margin-top: 12px;
            .skill-name {
              font-size: 15px;
            }
            .skill-rating {
              width: 189px;
              font-size: 12px;
            }
          }
        }
      }
      .project-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: white;
        .project-title {
          width: 189px;
          margin: 12px auto;
          text-align: center;
        }
        .project-item {
          width: 189px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          .project-name {
            font-size: 15px;
            width: 189px;
            margin-top: 12px;
          }
        }
        .project-link {
          font-size: 12px;
          width: 189px;
          margin-top: 12px;

        }
      }
    }
    .right-part {
      margin-left: 6px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .work-title {
        height: 180px;
        width: 100%;
        color: #888888;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .work-wrapper {
        width: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
        .work-items {
          width: 600px;
          display: flex;
          margin-bottom: 12px;
          .work-period {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 150px;
            height: 24px;
            border-radius: 12px;
            background: #363435;
            font-size: 12px;
            color: white;
          }
          .circle-border {
            width: 12px;
            padding-top: 4px;
            margin-left: 12px;
            margin-right: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .circle-item {
              height: 12px;
              width: 12px;
              border: 2px solid #888888;
              border-radius: 50% 50%;
            }
            .border-item {
              flex: 1;
              height: 100%;
              border-left: 1px solid #888888;
            }

          }
          .work-content {
            padding-left: 12px;
            flex: 1;
            .work-company-name {
              font-size: 16px;
              color: #363435;
            }
            ul {
              min-height: 120px;
              display: flex;
              flex-direction: column;
              justify-content: start;
              align-items: flex-start;
              margin-top: 6px;
              padding-left: 24px;
              li {
                min-height: 18px;
                font-size: 12px;
                color: #888888;
                line-height: 18px;
                list-style: disc;
              }
            }
          }
        }
      }
    }
  }

  .active {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    .preview-wrapper {
      position: relative;
      width: 1200px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      .left-part {
        width: 300px;
        border-radius: 4px;
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
          border-top-right-radius: 300px 40px;
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
          background-size: 12px 6px;
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
        .project-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background: white;
          .project-title {
            width: 252px;
            margin: 16px auto;
            text-align: center;
          }
          .project-item {
            width: 252px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .project-name {
              font-size: 1520;
              width: 252px;
              margin-top: 16px;
            }
          }
          .project-link {
            font-size: 16px;
            width: 252px;
            margin-top: 16px;

          }
        }
      }
      .right-part {
        margin-left: 8px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .work-title {
          height: 240px;
          width: 100%;
          color: #888888;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .work-wrapper {
          width: 900px;
          display: flex;
          justify-content: center;
          align-items: center;
          .work-items {
            width: 900px;
            display: flex;
            margin-bottom: 16px;
            .work-period {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-left: 32px;
              width: 200px;
              height: 32px;
              border-radius: 16px;
              background: #363435;
              font-size: 16px;
              color: white;
            }
            .circle-border {
              width: 16px;
              padding-top: 4px;
              margin-left: 16px;
              margin-right: 16px;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              .circle-item {
                height: 16px;
                width: 16px;
                border: 2px solid #888888;
                border-radius: 50% 50%;
              }
              .border-item {
                flex: 1;
                height: 100%;
                border-left: 1px solid #888888;
              }

            }
            .work-content {
              padding-left: 16px;
              flex: 1;
              .work-company-name {
                font-size: 24px;
                color: #363435;
              }
              ul {
                min-height: 180px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                margin-top: 8px;
                padding-left: 32px;
                li {
                  min-height: 24px;
                  font-size: 16px;
                  color: #888888;
                  line-height: 24px;
                  list-style: disc;
                }
              }
            }
          }
        }
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
