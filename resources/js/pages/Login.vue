<template>
  <div class="login-container" v-show="!$root.me.loading">
    <b-card
      border-variant="dark"
      header="User Login"
      header-bg-variant="dark"
      header-text-variant="white"
      align="center"
    >
      <b-row>
        <b-col>
          <b-alert
            :show="error != ''"
            dismissible
            variant="danger"
            @dismissed="error = ''"
          >
            {{ error }}
          </b-alert>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" class="mt-4">
          <div class="svg-bg unlock"></div>
        </b-col>
        <b-col md="8">
          <b-form @submit.prevent="login" align="left">
            <b-form-group id="input-group-1" label="Email" label-for="email">
              <b-form-input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-1" label="Password" label-for="pass">
              <b-form-input
                id="pass"
                v-model="form.password"
                type="password"
                placeholder="Enter password"
                required
              ></b-form-input>
            </b-form-group>
            <div class="d-flex justify-content-end">
              <b-button type="submit" variant="warning" class="mr-1">
                Submit
              </b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </div>
          </b-form>
        </b-col>
      </b-row>
      <v-debug :data="$data" />
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      error: ''
    };
  },
  props: ['store'],
  mounted() {
    window.error = this.error;
    axios.get('/sanctum/csrf-cookie');
    if (app.me.name) {
      return app.$router.push('/');
    }
  },
  updated() {
    if (app.me.name) {
      return app.$router.push('/');
    }
  },
  methods: {
    login() {
      axios
        .post('/login', this.form)
        .then(res => app.loadAppData())
        .catch(({ response }) => {
          console.log('error', response);
          this.error = response.data.message;
        });
    }
  }
};
</script>

<style>
.login-container {
  max-width: 600px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}
.svg-bg {
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 100%;
  height: 100px;
}
.btn-warning {
  color: white !important;
  background-color: #f4b700 !important;
  font-weight: 500 !important;
}
.btn-warning:hover {
  background-color: #dda601 !important;
}
.unlock {
  /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 491.519 491.519' style='enable-background:new 0 0 491.519 491.519;' xml:space='preserve'%3E%3Cpath style='fill:%23DC8744;' d='M399.398,220.824h-19.802h-47.753h-86.083h-86.077h-47.753H92.122 c-15.658,0-28.35,12.692-28.35,28.349v213.996c0,15.657,12.692,28.349,28.35,28.349h153.637h153.638 c15.657,0,28.35-12.692,28.35-28.349V249.173C427.747,233.516,415.055,220.824,399.398,220.824z'/%3E%3Cpath style='fill:%233A556A;' d='M245.763,47.753c47.467,0,86.08,38.613,86.08,86.08v69.744h47.753v-69.744 C379.596,60.039,319.558,0,245.763,0h-0.003v47.753C245.759,47.753,245.763,47.753,245.763,47.753z'/%3E%3Cpath style='fill:%2364798A;' d='M228.436,49.505c5.596-1.149,11.391-1.752,17.323-1.752V0 c-73.793,0.002-133.83,60.039-133.83,133.834v1.436h47.753v-1.436c0-23.734,9.653-45.254,25.24-60.841 c3.897-3.897,8.164-7.423,12.744-10.519C206.828,56.281,217.238,51.803,228.436,49.505z'/%3E%3Cpath style='fill:%23FCD462;' d='M159.682,203.577h-47.753H92.122c-15.658,0-28.35,12.692-28.35,28.349v213.996 c0,15.657,12.692,28.349,28.35,28.349h153.637V203.577H159.682z'/%3E%3Cpath style='fill:%23F6C358;' d='M399.398,203.577h-19.802h-47.753h-86.083v270.695h153.638c15.657,0,28.35-12.692,28.35-28.349 V231.927C427.747,216.27,415.055,203.577,399.398,203.577z'/%3E%3Cpath style='fill:%23DC8744;' d='M278.164,297.611c0-17.896-14.508-32.405-32.405-32.405s-32.405,14.508-32.405,32.405 c0,11.505,6.035,21.547,15.072,27.297l-9.665,46.047h53.994l-9.663-46.048C272.129,319.158,278.164,309.116,278.164,297.611z'/%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E"); */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 460 460' style='enable-background:new 0 0 460 460;' xml:space='preserve'%3E%3Cg id='XMLID_1038_'%3E%3Cg id='XMLID_1215_'%3E%3Cpath id='XMLID_1943_' style='fill:%23DE3E30;' d='M281.682,214.742H178.318c-11.874,0-21.5-9.626-21.5-21.5v-62.909h146.364v62.909 C303.182,205.116,293.556,214.742,281.682,214.742z'/%3E%3C/g%3E%3Cpath id='XMLID_2096_' style='opacity:0.49;fill:%23D0D5D9;' d='M281.802,130.333v42.656c0,12.302-9.973,22.275-22.275,22.275 H157.713c-0.238,0-0.469-0.028-0.706-0.036c1.363,10.996,10.721,19.513,22.086,19.513h101.814c12.302,0,22.275-9.973,22.275-22.275 v-62.134H281.802z'/%3E%3Cg id='XMLID_1213_'%3E%3Cpath id='XMLID_459_' style='fill:%23F9B65F;' d='M259.292,130.333v-26.864c0-16.177-13.114-29.292-29.292-29.292 s-29.292,13.114-29.292,29.292v26.864h-22.981V99.94c0-28.869,23.403-52.273,52.273-52.273s52.273,23.403,52.273,52.273v30.394 H259.292z'/%3E%3C/g%3E%3Cg id='XMLID_1212_'%3E%3Cpath id='XMLID_3073_' style='fill:%23FFFFFF;' d='M230,190.452c-4.292,0-7.77-3.479-7.77-7.77v-20.909 c0-4.291,3.478-7.77,7.77-7.77s7.77,3.479,7.77,7.77v20.909C237.77,186.973,234.292,190.452,230,190.452z'/%3E%3C/g%3E%3Cg id='XMLID_2831_'%3E%3Cpath id='XMLID_1942_' style='fill:%2386C867;' d='M35.743,265.969C16.003,265.969,0,281.972,0,301.713v74.877 c0,19.74,16.003,35.743,35.743,35.743h313.401V265.969H35.743z'/%3E%3C/g%3E%3Cpath id='XMLID_1017_' style='opacity:0.49;fill:%23D0D5D9;' d='M48.176,391.283c-19.74,0-35.743-16.003-35.743-35.743v-74.877 c0-2.242,0.216-4.432,0.611-6.559C5.079,280.658,0,290.592,0,301.713v74.877c0,19.74,16.003,35.743,35.743,35.743h313.401v-21.05 H48.176z'/%3E%3Cg id='XMLID_2832_'%3E%3Cpath id='XMLID_1941_' style='fill:%236AAC4B;' d='M424.257,265.969h-75.113v146.364h75.113c19.74,0,35.743-16.003,35.743-35.743 v-74.877C460,281.972,443.997,265.969,424.257,265.969z'/%3E%3C/g%3E%3Cpath id='XMLID_2095_' style='opacity:0.49;fill:%23D0D5D9;' d='M424.257,391.283h-75.113v21.05h75.113 c19.74,0,35.743-16.003,35.743-35.743v-21.05C460,375.28,443.997,391.283,424.257,391.283z'/%3E%3Cg id='XMLID_1087_'%3E%3Cpath id='XMLID_3072_' style='fill:%23FFFFFF;' d='M390.35,373.058c-1.989,0-3.977-0.758-5.495-2.276 c-3.034-3.034-3.034-7.954,0-10.989l20.643-20.642l-20.643-20.642c-3.034-3.034-3.034-7.954,0-10.989 c3.035-3.034,7.954-3.034,10.99,0l26.137,26.137c1.457,1.457,2.275,3.433,2.275,5.494s-0.818,4.037-2.275,5.494l-26.137,26.136 C394.327,372.299,392.338,373.058,390.35,373.058z'/%3E%3C/g%3E%3Cg id='XMLID_1088_'%3E%3Ccircle id='XMLID_1940_' style='fill:%23ECF0F1;' cx='64.572' cy='339.151' r='20.294'/%3E%3C/g%3E%3Cg id='XMLID_1090_'%3E%3Ccircle id='XMLID_1939_' style='fill:%23ECF0F1;' cx='125.455' cy='339.151' r='20.294'/%3E%3C/g%3E%3Cg id='XMLID_1091_'%3E%3Ccircle id='XMLID_1938_' style='fill:%23ECF0F1;' cx='186.337' cy='339.151' r='20.294'/%3E%3C/g%3E%3Cg id='XMLID_1092_'%3E%3Cpath id='XMLID_3071_' style='fill:%23FFFFFF;' d='M271.818,346.921h-31.363c-4.292,0-7.77-3.479-7.77-7.77s3.478-7.77,7.77-7.77 h31.363c4.292,0,7.77,3.479,7.77,7.77S276.11,346.921,271.818,346.921z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E");
}
</style>
