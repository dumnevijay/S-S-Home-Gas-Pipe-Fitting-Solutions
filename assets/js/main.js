(function(){
  var root=document.documentElement, NUM="917396501238";
  /* FILL THESE after you create each profile. Leave "" to hide a button. */
  var LINKS={
    "Google Maps":"",      // e.g. https://maps.app.goo.gl/xxxx  (Share > Copy link on your Business Profile)
    "Google review":"",    // Business Profile > Ask for reviews > copy link
    "Facebook":"",         // e.g. https://www.facebook.com/yourpagename
    "Instagram":"",        // e.g. https://www.instagram.com/yourhandle
    "YouTube":"",          // e.g. https://www.youtube.com/@yourchannel
    "Justdial":""          // your Justdial listing page
  };
  var soc=document.getElementById("social");
  Object.keys(LINKS).forEach(function(k){
    if(!LINKS[k]) return;
    var a=document.createElement("a");a.href=LINKS[k];a.target="_blank";a.rel="noopener";a.textContent=k;soc.appendChild(a);
  });
  var GROUPS=[
    {en:"Shankarpally and nearby villages",te:"శంకర్‌పల్లి మరియు సమీప గ్రామాలు",p:[
      ["Shankarpally","శంకర్‌పల్లి"],["Mokila","మోకిల"],["Bhanoor","భానూరు"],["Eddumailaram","ఎద్దుమైలారం"],["Kondakal","కొండకల్"],["Chandanvelly","చందన్‌వెల్లి"],["Mirzaguda","మిర్జాగూడ"],["Prathap Singaram","ప్రతాప్ సింగారం"],["Tangadpally","టంగడ్‌పల్లి"],["Gopulaaram","గోపులారం"],["Fathepur","ఫతేపూర్"],["Bulkapur","బుల్కాపూర్"],["Ramanthapur","రామంతాపూర్"],["Singapur","సింగాపూర్"],["Donthanapally","దొంతనపల్లి"],["Kammeta","కమ్మెట"],["Yenkepally","ఎన్కెపల్లి"]]},
    {en:"Chevella, Moinabad and Gandipet side",te:"చేవెళ్ల, మొయినాబాద్, గండిపేట్ వైపు",p:[
      ["Chevella","చేవెళ్ల"],["Moinabad","మొయినాబాద్"],["Aziz Nagar","అజీజ్‌నగర్"],["Chilkur","చిలుకూరు"],["Himayatsagar","హిమాయత్‌సాగర్"],["Gandipet","గండిపేట్"],["Narsingi","నార్సింగి"],["Kokapet","కోకాపేట్"],["Budvel","బుద్వేల్"],["Rajendranagar","రాజేంద్రనగర్"]]},
    {en:"Hyderabad west and Patancheru side",te:"హైదరాబాద్ పశ్చిమం మరియు పటాన్‌చెరు వైపు",p:[
      ["Gachibowli","గచ్చిబౌలి"],["Financial District","ఫైనాన్షియల్ డిస్ట్రిక్ట్"],["Nanakramguda","నానక్‌రామ్‌గూడ"],["Manikonda","మణికొండ"],["Tellapur","తెల్లాపూర్"],["Kollur","కొల్లూరు"],["Osman Nagar","ఉస్మాన్‌నగర్"],["Kismatpur","కిస్మత్‌పూర్"],["Patancheru","పటాన్‌చెరు"],["Ameenpur","అమీన్‌పూర్"]]}
  ];
  var PACKS=[["Basic","బేసిక్"],["Standard","స్టాండర్డ్"],["Premium","ప్రీమియం"],["Not sure","తెలియదు"]];
  function sp(en,te){return '<span class="en">'+en+'</span><span class="te">'+te+'</span>'}
  var place=document.getElementById("f-place"), pack=document.getElementById("f-pack"), list=document.getElementById("areas-list");
  var html="", opts='<option value="">'+"—"+'</option>';
  GROUPS.forEach(function(g,gi){
    html+='<h3>'+sp(g.en,g.te)+'</h3><div class="chips">';
    opts+='<optgroup label="'+g.en+'">';
    g.p.forEach(function(p,i){
      var id=gi+"-"+i;
      html+='<button type="button" class="chip'+(gi===0&&i===0?' home':'')+'" data-id="'+id+'">'+sp(p[0],p[1])+'</button>';
      opts+='<option value="'+id+'">'+p[0]+' / '+p[1]+'</option>';
    });
    html+='</div>'; opts+='</optgroup>';
  });
  opts+='<option value="other">Other / ఇతర</option>';
  list.innerHTML=html; place.innerHTML=opts;
  pack.innerHTML=PACKS.map(function(p,i){return '<option value="'+i+'">'+p[0]+' / '+p[1]+'</option>'}).join("");

  function lang(){return root.lang==="te"?"te":"en"}
  function placeName(v){
    if(!v) return "";
    if(v==="other") return lang()==="te"?"ఇతర (మెసేజ్‌లో రాస్తాను)":"Other (I will write it in the chat)";
    var a=v.split("-"), p=GROUPS[a[0]].p[a[1]];
    return lang()==="te"?p[1]:p[0];
  }
  function msg(full){
    var te=lang()==="te", n=document.getElementById("f-name").value.trim(), pl=placeName(place.value), pk=PACKS[pack.value][te?1:0];
    var t=te?"నమస్కారం S.S. హోమ్ గ్యాస్ పైప్‌లైన్ ఫిట్టింగ్ సొల్యూషన్స్, నాకు వంటగది గ్యాస్ పైప్‌లైన్ కొటేషన్ కావాలి.":"Hello S.S. Home Gas Pipeline Fitting Solutions, I want a quote for a kitchen gas pipeline.";
    if(full){
      if(n) t+="\n"+(te?"పేరు: ":"Name: ")+n;
      if(pl) t+="\n"+(te?"గ్రామం/ప్రాంతం: ":"Village/Area: ")+pl;
      t+="\n"+(te?"ప్యాకేజీ: ":"Package: ")+pk;
    }
    return t+"\n("+(te?"వెబ్‌సైట్ నుంచి":"Sent from website")+")";
  }
  function link(full){return "https://wa.me/"+NUM+"?text="+encodeURIComponent(msg(full))}
  function refresh(){document.querySelectorAll("a[data-wa]").forEach(function(a){a.href=link(false)})}

  function setLang(l){root.lang=l;try{localStorage.setItem("lang",l)}catch(e){} refresh()}
  var saved=null;try{saved=localStorage.getItem("lang")}catch(e){}
  var q=new URLSearchParams(location.search).get("lang");
  setLang(q==="te"||q==="en"?q:(saved==="te"?"te":"en"));
  document.querySelectorAll(".lang button").forEach(function(b){b.addEventListener("click",function(){setLang(b.dataset.l)})});

  list.addEventListener("click",function(e){
    var b=e.target.closest(".chip"); if(!b) return;
    place.value=b.dataset.id;
    document.getElementById("enquiry").scrollIntoView({behavior:"smooth"});
    document.getElementById("f-name").focus({preventScroll:true});
  });
  document.getElementById("f-send").addEventListener("click",function(){
    window.open(link(true),"_blank","noopener");
  });
})();
