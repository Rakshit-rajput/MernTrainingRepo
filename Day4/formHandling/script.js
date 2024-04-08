function submitForm(e) {
  e.preventDefault();

  const res = {
    hobbies: [],
  };
  const t = e.target;
  for (let i = 0; i < t.length; i++) {
    const ty = t[i].type;
    const vl = t[i].value;
    const nm = t[i].name;
    if (ty !== "submit") {
      res[nm] = vl;
    }

    if (ty === "checkbox" && t[i].checked) {
      res.hobbies.push(vl);
    }
  }
  console.log(res);
}
