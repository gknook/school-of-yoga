// export default input => {
//   const summary = computed(() => unref(input.summary));

//   return summary;
// };

export const useUtils = () => {
  const checkYogaType = summary => {
    console.log(summary);
    const phrase = summary.toLowerCase();

    if (phrase.includes("ashtanga")) {
      return "Ashtanga";
    } else if (phrase.includes("yin")) {
      return "Yin";
    } else if (phrase.includes("hatha")) {
      return "Hatha";
    } else if (phrase.includes("vinyasa")) {
      return "Vinyasa";
    } else {
      return "Other";
    }
  };

  return { checkYogaType };
};
