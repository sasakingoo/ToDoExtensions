let filter = $("#filter");

function init() {
  $("#save").on("click", () => {
    save();
  });
}

function save() {
  chrome.storage.sync.set({
    "filter": filter.val()
  }, () => {
    load();
  });  
}

function load() {
  chrome.storage.sync.get("filter", (items) => {
    filter.val(items.filter);
  });  
}

init();
load();
