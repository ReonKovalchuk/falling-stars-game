const { findColorByName, getRandomColor } = useColors();
const maxAnimationDuration = 8;
import Star from "~/components/icons/Star.vue";
import Snowflake from "~/components/icons/Snowflake.vue";
import Flower from "~/components/icons/Flower.vue";
import Leaf from "~/components/icons/Leaf.vue";

const sizes = [32, 36, 40, 44, 48, 52, 56, 60];
export default function () {
  const icons = [
    {
      name: "star",
      component: Star,
      defaultColor: findColorByName("gold"),
    },
    {
      name: "snowflake",
      component: Snowflake,
      defaultColor: findColorByName("blue"),
    },
    {
      name: "flower",
      component: Flower,
      defaultColor: findColorByName("pink"),
    },
    {
      name: "leaf",
      component: Leaf,
      defaultColor: findColorByName("red"),
    },
  ];

  function findIconByName(name: string = "star") {
    if (name == "random") {
      return getRandomIcon();
    } else {
      const res = icons.find((icon) => {
        return icon.name == name;
      });
      return res ? res : icons[0];
    }
  }

  function generateIconData(
    iconName: string = "star", //
    color: string = "default"
  ) {
    const icon = findIconByName(iconName);
    if (color === "default") {
      color = icon.defaultColor;
    } else if (color === "random") {
      color = getRandomColor();
    }
    const iconSize = Math.floor(25 + Math.random() * 30);
    // const iconSize = getRandomSize();

    if (process.client) {
      const iconData = {
        id: new Date().valueOf(),
        left: Math.floor(Math.random() * (window.innerWidth - iconSize)) + "px",
        animationDuration:
          Math.floor(
            maxAnimationDuration / 2 +
              (Math.random() * maxAnimationDuration) / 2
          ) + "s",
        fontSize: iconSize + "px",
        offset: iconSize / 2 + "px",
        color,
        icon: icon.name,
      };
      return iconData;
    }
  }
  function getRandomIcon() {
    const i = Math.floor(Math.random() * icons.length);
    return icons[i];
  }
  function getRandomSize() {
    const i = Math.floor(Math.random() * sizes.length);
    return sizes[i];
  }
  return { icons, findIconByName, generateIconData };
}
