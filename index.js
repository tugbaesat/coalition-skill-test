document.addEventListener("DOMContentLoaded", function () {
  const mountainOneDescriptions = [
    "25 Dec 2016   Vestibulum viverra",
    "26 Dec 2016   Vestibulum viverra",
    "27 Dec 2016   Vestibulum viverra",
  ];

  const mountainTwoDescriptions = [
    "21 Nov 2016   Vestibulum viverra",
    "22 Nov 2016   Vestibulum viverra",
    "23 Nov 2016   Vestibulum viverra",
  ];

  const scheduleContainer = document.getElementById("descriptions");
  const mountainTitles = document.querySelectorAll(".mountain");

  mountainOneDescriptions.forEach((description, index) => {
    const descriptionItem = document.createElement("div");
    descriptionItem.innerHTML = `<ul class="flex flex-col gap-6"><li>${description}</li></ul>`;
    scheduleContainer.appendChild(descriptionItem);
  });

  mountainTitles.forEach((title, index) => {
    title.addEventListener("click", () => {
      scheduleContainer.innerHTML = "";

      const selectedDescriptions =
        index === 0 ? mountainOneDescriptions : mountainTwoDescriptions;

      selectedDescriptions.forEach((description) => {
        const descriptionItem = document.createElement("div");
        descriptionItem.innerHTML = `<ul><li>${description}</li></ul>`;
        scheduleContainer.appendChild(descriptionItem);
      });
      mountainTitles.forEach((title) => {
        title.classList.remove("underline");
      });
      title.classList.add("underline");
    });
  });
});
