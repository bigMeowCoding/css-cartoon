import "./styles/index.scss";
import { cssConfig } from "./config/css";

const player: any = {
  index: 1,
  id: null,
  time: 0,
  ui: {
    styles: document.getElementById("styles"),
    styleCode: document.getElementById("style-code"),
  },
  init() {
    this.ui.styleCode.innerText = cssConfig.substr(0, this.index);
    this.ui.styles.innerHTML = cssConfig.substr(0, this.index);
    this.play();
  },
  run() {
    player.index++;
    if (player.n > cssConfig.length) {
      clearInterval(player.id);
      return;
    }
    player.ui.styleCode.innerText = cssConfig.substr(0, player.index);
    player.ui.styles.innerHTML = cssConfig.substr(0, player.index);
    player.ui.styleCode.scrollTop = player.ui.styleCode.scrollHeight;
  },
  play() {
    this.id = setInterval(this.run, this.time);
  },
};

player.init();
