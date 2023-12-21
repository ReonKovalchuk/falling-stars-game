export default function () {
  const colors = [
    {
      name: "gold",
      hex: "#fca311",
    },
    {
      name: "pink",
      hex: "#F5A3A8",
    },
    {
      name: "red",
      hex: "#901424",
    },
    {
      name: "blue",
      hex: "#49B6FF",
    },
  ];
  const findColorByName = (name: string) => {
    if (name === "random") {
      return getRandomColor();
    } else {
      const res = colors.find((color) => {
        return color.name == name;
      });
      return res ? res.hex : colors[0].hex;
    }
  };
  const getRandomColor = () => {
    return colors[Math.round(Math.random() * colors.length)].hex;
  };
  return { colors, findColorByName, getRandomColor };
}