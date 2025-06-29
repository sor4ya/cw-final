// Get references to the input, button, and guesses list
const guessBtn = document.getElementById("guessBtn");
const countryInput = document.getElementById("countryInput");
const guessesList = document.getElementById("guessesList");

// Get references to popup elements
const popupOverlay = document.getElementById("popupOverlay");
const popupTitle = document.getElementById("popupTitle");
const popupMessage = document.getElementById("popupMessage");
const popupCloseBtn = document.getElementById("popupCloseBtn");

let correctCountry = ''; // The country to guess, can be changed

// Pool of countries to guess from and flag URLs
const countries = [
  {name: "Andorra", flag: "https://flagcdn.com/ad.svg"},
  { name: "United Arab Emirates", flag: "https://flagcdn.com/ae.svg" },
  { name: "Afghanistan", flag: "https://flagcdn.com/af.svg" },
  { name: "Antigua and Barbuda", flag: "https://flagcdn.com/ag.svg" },
  { name: "Albania", flag: "https://flagcdn.com/al.svg" },
  { name: "Armenia", flag: "https://flagcdn.com/am.svg" },
  { name: "Angola", flag: "https://flagcdn.com/ao.svg" },
  { name: "Argentina", flag: "https://flagcdn.com/ar.svg" },
  { name: "Austria", flag: "https://flagcdn.com/at.svg" },
  { name: "Australia", flag: "https://flagcdn.com/au.svg" },
  { name: "Aruba", flag: "https://flagcdn.com/aw.svg" },
  { name: "Azerbaijan", flag: "https://flagcdn.com/az.svg" },
  { name: "Bosnia and Herzegovina", flag: "https://flagcdn.com/ba.svg" },
  { name: "Barbados", flag: "https://flagcdn.com/bb.svg" },
  { name: "Bangladesh", flag: "https://flagcdn.com/bd.svg" },
  { name: "Belgium", flag: "https://flagcdn.com/be.svg" },
  { name: "Burkina Faso", flag: "https://flagcdn.com/bf.svg" },
  { name: "Bulgaria", flag: "https://flagcdn.com/bg.svg" },
  { name: "Bahrain", flag: "https://flagcdn.com/bh.svg" },
  { name: "Burundi", flag: "https://flagcdn.com/bi.svg" },
  { name: "Benin", flag: "https://flagcdn.com/bj.svg" },
  { name: "Saint Barthélemy", flag: "https://flagcdn.com/bl.svg" },
  { name: "Brunei", flag: "https://flagcdn.com/bn.svg" },
  { name: "Bolivia", flag: "https://flagcdn.com/bo.svg" },
  { name: "Brazil", flag: "https://flagcdn.com/br.svg" },
  { name: "Bahamas", flag: "https://flagcdn.com/bs.svg" },
  { name: "Bhutan", flag: "https://flagcdn.com/bt.svg" },
  { name: "Botswana", flag: "https://flagcdn.com/bw.svg" },
  { name: "Belarus", flag: "https://flagcdn.com/by.svg" },
  { name: "Belize", flag: "https://flagcdn.com/bz.svg" },
  { name: "Canada", flag: "https://flagcdn.com/ca.svg" },
  { name: "Democratic Republic of the Congo", flag: "https://flagcdn.com/cd.svg" },
  { name: "Central African Republic", flag: "https://flagcdn.com/cf.svg" },
  { name: "Congo", flag: "https://flagcdn.com/cg.svg" },
  { name: "Switzerland", flag: "https://flagcdn.com/ch.svg" },
  { name: "Côte d'Ivoire (Ivory Coast)", flag: "https://flagcdn.com/ci.svg" },
  { name: "Cook Islands", flag: "https://flagcdn.com/ck.svg" },
  { name: "Chile", flag: "https://flagcdn.com/cl.svg" },
  { name: "Cameroon", flag: "https://flagcdn.com/cm.svg" },
  { name: "China", flag: "https://flagcdn.com/cn.svg" },
  { name: "Colombia", flag: "https://flagcdn.com/co.svg" },
  { name: "Costa Rica", flag: "https://flagcdn.com/cr.svg" },
  { name: "Cuba", flag: "https://flagcdn.com/cu.svg" },
  { name: "Cabo Verde", flag: "https://flagcdn.com/cv.svg" },
  { name: "Curaçao", flag: "https://flagcdn.com/cw.svg" },
  { name: "Cyprus", flag: "https://flagcdn.com/cy.svg" },
  { name: "Czechia", flag: "https://flagcdn.com/cz.svg" },
  { name: "Germany", flag: "https://flagcdn.com/de.svg" },
  { name: "Djibouti", flag: "https://flagcdn.com/dj.svg" },
  { name: "Denmark", flag: "https://flagcdn.com/dk.svg" },
  { name: "Dominica", flag: "https://flagcdn.com/dm.svg" },
  { name: "Dominican Republic", flag: "https://flagcdn.com/do.svg" },
  { name: "Algeria", flag: "https://flagcdn.com/dz.svg" },
  { name: "Ecuador", flag: "https://flagcdn.com/ec.svg" },
  { name: "Estonia", flag: "https://flagcdn.com/ee.svg" },
  { name: "Egypt", flag: "https://flagcdn.com/eg.svg" },
  { name: "Eritrea", flag: "https://flagcdn.com/er.svg" },
  { name: "Spain", flag: "https://flagcdn.com/es.svg" },
  { name: "Ethiopia", flag: "https://flagcdn.com/et.svg" },
  { name: "Finland", flag: "https://flagcdn.com/fi.svg" },
  { name: "Fiji", flag: "https://flagcdn.com/fj.svg" },
  { name: "Micronesia (Federated States of)", flag: "https://flagcdn.com/fm.svg" },
  { name: "France", flag: "https://flagcdn.com/fr.svg" },
  { name: "Gabon", flag: "https://flagcdn.com/ga.svg" },
  { name: "United Kingdom", flag: "https://flagcdn.com/gb.svg" },
  { name: "Grenada", flag: "https://flagcdn.com/gd.svg" },
  { name: "Georgia", flag: "https://flagcdn.com/ge.svg" },
  { name: "Ghana", flag: "https://flagcdn.com/gh.svg" },
  { name: "Gambia", flag: "https://flagcdn.com/gm.svg" },
  { name: "Guinea", flag: "https://flagcdn.com/gn.svg" },
  { name: "Equatorial Guinea", flag: "https://flagcdn.com/gq.svg" },
  { name: "Greece", flag: "https://flagcdn.com/gr.svg" },
  { name: "Guatemala", flag: "https://flagcdn.com/gt.svg" },
  { name: "Guinea-Bissau", flag: "https://flagcdn.com/gw.svg" },
  { name: "Guyana", flag: "https://flagcdn.com/gy.svg" },
  { name: "Honduras", flag: "https://flagcdn.com/hn.svg" },
  { name: "Croatia", flag: "https://flagcdn.com/hr.svg" },
  { name: "Haiti", flag: "https://flagcdn.com/ht.svg" },
  { name: "Hungary", flag: "https://flagcdn.com/hu.svg" },
  { name: "Indonesia", flag: "https://flagcdn.com/id.svg" },
  { name: "Ireland", flag: "https://flagcdn.com/ie.svg" },
  { name: "Israel", flag: "https://flagcdn.com/il.svg" },
  { name: "India", flag: "https://flagcdn.com/in.svg" },
  { name: "Iraq", flag: "https://flagcdn.com/iq.svg" },
  { name: "Iran", flag: "https://flagcdn.com/ir.svg" },
  { name: "Iceland", flag: "https://flagcdn.com/is.svg" },
  { name: "Italy", flag: "https://flagcdn.com/it.svg" },
  { name: "Jamaica", flag: "https://flagcdn.com/jm.svg" },
  { name: "Jordan", flag: "https://flagcdn.com/jo.svg" },
  { name: "Japan", flag: "https://flagcdn.com/jp.svg" },
  { name: "Kenya", flag: "https://flagcdn.com/ke.svg" },
  { name: "Kyrgyzstan", flag: "https://flagcdn.com/kg.svg" },
  { name: "Cambodia", flag: "https://flagcdn.com/kh.svg" },
  { name: "Kiribati", flag: "https://flagcdn.com/ki.svg" },
  { name: "Comoros", flag: "https://flagcdn.com/km.svg" },
  { name: "Saint Kitts and Nevis", flag: "https://flagcdn.com/kn.svg" },
  { name: "North Korea", flag: "https://flagcdn.com/kp.svg" },
  { name: "South Korea", flag: "https://flagcdn.com/kr.svg" },
  { name: "Kuwait", flag: "https://flagcdn.com/kw.svg" },
  { name: "Kazakhstan", flag: "https://flagcdn.com/kz.svg" },
  { name: "Laos", flag: "https://flagcdn.com/la.svg" },
  { name: "Lebanon", flag: "https://flagcdn.com/lb.svg" },
  { name: "Saint Lucia", flag: "https://flagcdn.com/lc.svg" },
  { name: "Liechtenstein", flag: "https://flagcdn.com/li.svg"},
  { name: "Sri Lanka", flag: "https://flagcdn.com/lk.svg" },
  { name: "Liberia", flag: "https://flagcdn.com/lr.svg" },
  { name: "Lesotho", flag: "https://flagcdn.com/ls.svg" },
  { name: "Lithuania", flag: "https://flagcdn.com/lt.svg" },
  { name: "Luxembourg", flag: "https://flagcdn.com/lu.svg" },
  { name: "Latvia", flag: "https://flagcdn.com/lv.svg" },
  { name: "Libya", flag: "https://flagcdn.com/ly.svg" },
  { name: "Morocco", flag: "https://flagcdn.com/ma.svg" },
  { name: "Monaco", flag: "https://flagcdn.com/mc.svg" },
  { name: "Moldova", flag: "https://flagcdn.com/md.svg" },
  { name: "Montenegro", flag: "https://flagcdn.com/me.svg" },
  { name: "Madagascar", flag: "https://flagcdn.com/mg.svg" },
  { name: "Marshall Islands", flag: "https://flagcdn.com/mh.svg" },
  { name: "North Macedonia", flag: "https://flagcdn.com/mk.svg" },
  { name: "Mali", flag: "https://flagcdn.com/ml.svg" },
  { name: "Myanmar", flag: "https://flagcdn.com/mm.svg" },
  { name: "Mongolia", flag: "https://flagcdn.com/mn.svg" },
  { name: "Mauritania", flag: "https://flagcdn.com/mr.svg" },
  { name: "Malta", flag: "https://flagcdn.com/mt.svg" },
  { name: "Mauritius", flag: "https://flagcdn.com/mu.svg" },
  { name: "Maldives", flag: "https://flagcdn.com/mv.svg" },
  { name: "Malawi", flag: "https://flagcdn.com/mw.svg" },
  { name: "Mexico", flag: "https://flagcdn.com/mx.svg" },
  { name: "Malaysia", flag: "https://flagcdn.com/my.svg" },
  { name: "Mozambique", flag: "https://flagcdn.com/mz.svg" },
  { name: "Namibia", flag: "https://flagcdn.com/na.svg" },
  { name: "New Caledonia", flag: "https://flagcdn.com/nc.svg" },
  { name: "Niger", flag: "https://flagcdn.com/ne.svg" },
  { name: "Nigeria", flag: "https://flagcdn.com/ng.svg" },
  { name: "Nicaragua", flag: "https://flagcdn.com/ni.svg" },
  { name: "Netherlands", flag: "https://flagcdn.com/nl.svg" },
  { name: "Norway", flag: "https://flagcdn.com/no.svg" },
  { name: "Nepal", flag: "https://flagcdn.com/np.svg" },
  { name: "Nauru", flag: "https://flagcdn.com/nr.svg" },
  { name: "New Zealand", flag: "https://flagcdn.com/nz.svg" },
  { name: "Oman", flag: "https://flagcdn.com/om.svg" },
  { name: "Panama", flag: "https://flagcdn.com/pa.svg" },
  { name: "Peru", flag: "https://flagcdn.com/pe.svg" },
  { name: "French Polynesia", flag: "https://flagcdn.com/pf.svg" },
  { name: "Papua New Guinea", flag: "https://flagcdn.com/pg.svg" },
  { name: "Philippines", flag: "https://flagcdn.com/ph.svg" },
  { name: "Pakistan", flag: "https://flagcdn.com/pk.svg" },
  { name: "Poland", flag: "https://flagcdn.com/pl.svg" },
  { name: "Palestine", flag: "https://flagcdn.com/ps.svg" },
  { name: "Portugal", flag: "https://flagcdn.com/pt.svg" },
  { name: "Paraguay", flag: "https://flagcdn.com/py.svg" },
  { name: "Qatar", flag: "https://flagcdn.com/qa.svg" },
  { name: "Romania", flag: "https://flagcdn.com/ro.svg" },
  { name: "Serbia", flag: "https://flagcdn.com/rs.svg" },
  { name: "Russia", flag: "https://flagcdn.com/ru.svg" },
  { name: "Rwanda", flag: "https://flagcdn.com/rw.svg" },
  { name: "Saudi Arabia", flag: "https://flagcdn.com/sa.svg" },
  { name: "Solomon Islands", flag: "https://flagcdn.com/sb.svg" },
  { name: "Seychelles", flag: "https://flagcdn.com/sc.svg" },
  { name: "Sudan", flag: "https://flagcdn.com/sd.svg" },
  { name: "Sweden", flag: "https://flagcdn.com/se.svg" },
  { name: "Singapore", flag: "https://flagcdn.com/sg.svg" },
  { name: "Slovenia", flag: "https://flagcdn.com/si.svg" },
  { name: "Slovakia", flag: "https://flagcdn.com/sk.svg" },
  { name: "Sierra Leone", flag: "https://flagcdn.com/sl.svg" },
  { name: "San Marino", flag: "https://flagcdn.com/sm.svg" },
  { name: "Senegal", flag: "https://flagcdn.com/sn.svg" },
  { name: "Somalia", flag: "https://flagcdn.com/so.svg" },
  { name: "Suriname", flag: "https://flagcdn.com/sr.svg" },
  { name: "South Sudan", flag: "https://flagcdn.com/ss.svg" },
  { name: "São Tomé and Príncipe", flag: "https://flagcdn.com/st.svg" }, 
  { name: "El Salvador", flag: "https://flagcdn.com/sv.svg" },
  { name: "Sint Maarten", flag: "https://flagcdn.com/sx.svg" },
  { name: "Syria", flag: "https://flagcdn.com/sy.svg" }, 
  { name: "Eswatini", flag: "https://flagcdn.com/sz.svg" },
  { name: "Chad", flag: "https://flagcdn.com/td.svg" },
  { name: "Togo", flag: "https://flagcdn.com/tg.svg" },
  { name: "Thailand", flag: "https://flagcdn.com/th.svg" },
  { name: "Tajikistan", flag: "https://flagcdn.com/tj.svg" },
  { name: "Timor-Leste", flag: "https://flagcdn.com/tl.svg" },
  { name: "Turkmenistan", flag: "https://flagcdn.com/tm.svg" },
  { name: "Tunisia", flag: "https://flagcdn.com/tn.svg" },
  { name: "Tonga", flag: "https://flagcdn.com/to.svg" },
  { name: "Turkey", flag: "https://flagcdn.com/tr.svg" },
  { name: "Trinidad and Tobago", flag: "https://flagcdn.com/tt.svg" },
  { name: "Tuvalu", flag: "https://flagcdn.com/tv.svg" },
  { name: "Taiwan", flag: "https://flagcdn.com/tw.svg" },
  { name: "Tanzania", flag: "https://flagcdn.com/tz.svg" },
  { name: "Ukraine", flag: "https://flagcdn.com/ua.svg" },
  { name: "Uganda", flag: "https://flagcdn.com/ug.svg" },
  { name: "United States", flag: "https://flagcdn.com/us.svg" },
  { name: "Uruguay", flag: "https://flagcdn.com/uy.svg" },
  { name: "Uzbekistan", flag: "https://flagcdn.com/uz.svg" },
  { name: "Vatican City State (Holy See)", flag: "https://flagcdn.com/va.svg" },
  { name: "Saint Vincent and the Grenadines", flag: "https://flagcdn.com/vc.svg" },
  { name: "Venezuela", flag: "https://flagcdn.com/ve.svg" },
  { name: "Vietnam", flag: "https://flagcdn.com/vn.svg" },
  { name: "Vanuatu", flag: "https://flagcdn.com/vu.svg" },
  { name: "Samoa", flag: "https://flagcdn.com/ws.svg" },
  { name: "Kosovo", flag: "https://flagcdn.com/xk.svg" },
  { name: "Yemen", flag: "https://flagcdn.com/ye.svg" },
  { name: "South Africa", flag: "https://flagcdn.com/za.svg" },
  { name: "Zambia", flag: "https://flagcdn.com/zm.svg" },
  { name: "Zimbabwe", flag: "https://flagcdn.com/zw.svg" }
];

// Pool of Countries with Projects
const countryProjects = { // Only showing one project per country for simplicity
  "Bolivia" : [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/BO.WFP.Q1.11.076/001/BO.WFP.Q1.11.076.001-48383.jpeg", 
      location: "Parra Rancho", 
      url: "https://www.charitywater.org/projects/76-1#"},
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/BO.WFP.Q1.11.076/007/BO.WFP.Q1.11.076.007-48388.jpeg",
      location: "Isabel Torrico School",
      url: "https://www.charitywater.org/projects/76-7"}, 
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/BO.WFP.Q1.11.076/003/BO.WFP.Q1.11.076.003-48385.jpeg",
      location: "Cochimita Village",
      url: "https://www.charitywater.org/projects/76-3#"},
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/BO.WFP.Q1.11.076/004/BO.WFP.Q1.11.076.004-48386.jpeg",
      location: "Pucara Chico Village",
      url: "https://www.charitywater.org/projects/76-4"}
  ],

  "Guatemala": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/GT.WFP.Q1.11.077/005/GT.WFP.Q1.11.077.005-48639.JPG", 
      location: "Chiboy (+ Chustum, Ixcabuleu, Chixpach, Chilil II, Mixcolaja, y Pujerja)", 
      url: "https://www.charitywater.org/projects/77-5"},
  ],

  "Honduras": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/HN.WFP.Q1.11.078/015/HN.WFP.Q1.11.078.015-48403.JPG",
      location: "La Canada Village",
      url: "https://www.charitywater.org/projects/78-15"
    }
  ],

  "Haiti": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/HT.CON.Q4.10.068/003/HT.CON.Q4.10.068.003-60703.jpg",
      location: "Citadele",
      url: "https://www.charitywater.org/projects/68-3"
    }
  ],

  "Senegal": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/SN.ACA.2H.19.338/577/SN.ACA.2H.19.338-577-112cbdd714bdb2d5e0e1859c21ec5df30620e5c7.jpg",
      location: "Branol",
      url: "https://www.charitywater.org/projects/338-577"
    }
  ],

  "Sierra Leone": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/SL.WHI.1H.23.501/052/SL.WHI.1H.23.501-52-92fe577efcfb50cc4f2ce0392aa72fc060e8b417.jpg",
      location: "Dandaya",
      url: "https://www.charitywater.org/projects/501-52"
    }
  ],

  "Liberia": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/LR.EQU.Q2.09.039/028/LR.EQU.Q2.09.039.028-47543.jpg",
      location: "Zodru Clinic",
      url: "https://www.charitywater.org/projects/39-28"
    }
  ],

  "Côte d'Ivoire": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/CI.IRC.2H.22.490/018/CI.IRC.2H.22.490-18-2c1ad8356c32ae5bbc5b70484dc4f476a707057c.jpg",
      location: "Golikro",
      url: "https://www.charitywater.org/projects/490-18"
    }
  ],

  "Mali": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/ML.WVI.1H.17.246/026/ML.WVI.1H.17.246.026-7a12ddf7092066c8b343793dd7ea39827aeba66d.jpg",
      location: "Samantara",
      url: "https://www.charitywater.org/projects/246-26"
    }
  ], 

  "Burkina Faso": [ 
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/BF.EVI.2H.20.383/025/BF.EVI.2H.20.383-25-7c0c24feb39f681ea56a03a04fddf8c3d279ef4d.jpg",
      location: "Ouayalgui V4",
      url: "https://www.charitywater.org/projects/383-25"
    }
  ],

  "Niger": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/NE.WVI.2H.18.278/078/NE.WVI.2H.18.278.078-5241eda7e3975636989950d2e2c9a788590bfeb8.jpg",
      location: "Guidan Ara Mijin Yawa",
      url: "https://www.charitywater.org/projects/278-78"
    }
  ],

  "Cemtral African Republic": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/CF.ICD.Q4.10.065/106/CF.ICD.Q4.10.065.106-60600.jpg",
      location: "Kaga - Bandoro Quartier Abakar",
      url: "https://www.charitywater.org/projects/65-106"
    }
  ],

  "Democratic Republic of the Congo": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/DR.ACF.Q1.08.018/019/DR.ACF.Q1.08.018.019-46565.jpg",
      location: "Camp Militaries",
      url: "https://www.charitywater.org/projects/18-19"
    }
  ],

  "Tanzania": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/TZ.CRS.2H.22.485/042/TZ.CRS.2H.22.485-42-732f202b8e8201756f78253036e1274cc7c96791.jpg",
      location: "Igundu",
      url: "https://www.charitywater.org/projects/485-42"
    }
  ],

  "Uganda": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/UG.ILF.Q3.10.063/003/UG.ILF.Q3.10.063.003-48490.jpg",
      location: "Wapwoyo dugo gang",
      url: "https://www.charitywater.org/projects/63-3"
    }
  ],

  "Kenya": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/KE.LWI.Q3.08.031/016/KE.LWI.Q3.08.031.016-48380.jpg",
      location: "Uthini (ABC) School",
      url: "https://www.charitywater.org/projects/31-16"
    }
  ],

  "Rwanda": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/RW.WFP.Q4.12.131/162/RW.WFP.Q4.12.131.162-125828.jpg",
      location: "Rwahi Secondary",
      url: "https://www.charitywater.org/projects/131-162"
    }
  ],

  "Ethiopia": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/ET.IRC.Q2.11.090/087/ET.IRC.Q2.11.090.087-72438.jpg",
      location: "Anjama Antata",
      url: "https://www.charitywater.org/projects/90-87"
    }
  ],

  "Zambia": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/ZM.VWZ.1H.19.306/49/ZM.VWZ.1H.19.306-49-4402455f1d4512263a61067f7fa20430fcc0ea05.jpg",
      location: "Namaweshi/Kazungula",
      url: "https://www.charitywater.org/projects/306-49"
    }
  ],

  "Zimbabwe": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/ZW.WHH.2H.22.482/164/ZW.WHH.2H.22.482-164-513ba670f334fea7643079f0bbb0e8645aaf24dd.jpg",
      location: "Spencer",
      url: "https://www.charitywater.org/projects/482-164"
    }
  ],

  "Mozambique": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/MZ.WVI.Q4.13.149/009/MZ.WVI.Q4.13.149.009-133350.JPG",
      location: "Chale",
      url: "https://www.charitywater.org/projects/149-9"
    }
  ],

  "Malawi": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/MW.WVI.Q4.13.150/339/MW.WVI.Q4.13.150.339-137081.jpg",
      location: "Chendamata",
      url: "https://www.charitywater.org/projects/150-339"
    }
  ],

  "Madagascar": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/MG.CRS.1H.20.365/3005/MG.CRS.1H.20.365-3005-e54400bedd56fe761da02de23135831bd2b8d26c.jpg",
      location: "Ranomainty",
      url: "https://www.charitywater.org/projects/365-211"
    }
  ],

  "Laos": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/LA.TRV.1H.20.346/10001/LA.TRV.1H.20.346-10001-6e7f4269dccc99b21ea4806cdcabb6701dd5d5cb.jpg",
      location: "Khokman",
      url: "https://www.charitywater.org/projects/346-526"
    }
  ],

  "Cambodia": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/KH.SAM.Q4.10.066/146/KH.SAM.Q4.10.066.146-48137.jpg",
      location: "Tangkrosang",
      url: "https://www.charitywater.org/projects/66-146"
    }
  ],

  "India": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/IN.WAA.Q4.12.133/002/IN.WAA.Q4.12.133.002-115434.JPG",
      location: "60 Quarter A",
      url: "https://www.charitywater.org/projects/133-2"
    }
  ],

  "Nepal": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/NP.NEW.Q2.12.121/032/NP.NEW.Q2.12.121.032-72874.jpg",
      location: "Dunde",
      url: "https://www.charitywater.org/projects/121-32"
    }
  ],

  "Bangladesh": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/BD.CON.Q3.12.125/207/BD.CON.Q3.12.125.207-115295.JPG",
      location: "Safullapara",
      url: "https://www.charitywater.org/projects/125-207"
    }
  ],

  "Pakistan": [
    {
      thumbnail: "https://cw-saizi-photos-production.s3.amazonaws.com/PK.ACF.Q4.13.153/144/PK.ACF.Q4.13.153.144-139428.JPG",
      location: "Umeed Dero 2",
      url: "https://www.charitywater.org/projects/153-144"
    }
  ]
};

// Pool of Countries without Projects
const countryFunFacts = {};

//Use PapaParse to load and parse the CSV
Papa.parse('data/funfact.csv', {
  download: true,
  header: true, 
  complete: function(results) {
    // Find the actual data start index.
    // The actual header row in your CSV (which contains "Country Name")
    // is treated as a data row under the "Data Source" column by PapaParse.
    // So, we look for the row where 'Data Source' is 'Country Name' to find our starting point.
    let dataStartIndex = 0;
    for (let i = 0; i < results.data.length; i++) {
      // Check for the row that acts as the actual header in the original CSV
      if (results.data[i] && results.data[i]['Data Source'] === 'Country Name' && results.data[i]['World Development Indicators'] === 'Country Code') {
        dataStartIndex = i + 1; // Actual country data starts from the next row
        break;
      }
    }

    // Loop through each relevant data row
    for (let i = dataStartIndex; i < results.data.length; i++) {
      const row = results.data[i];

      // Skip any empty or malformed rows that might appear (e.g., last line in CSV)
      if (!row || Object.keys(row).length === 0 || !row['Data Source']) {
        continue;
      }

      // Access country name using "Data Source" as observed
      const country = row['Data Source'].trim();

      // Access 2022 percentage from __parsed_extra[63] as observed
      let percent = row.__parsed_extra && row.__parsed_extra[63] ? row.__parsed_extra[63].trim() : '';

      // Only add if country and percent are valid and not '' (missing data)
      if (country && percent !== '' && !isNaN(Number(percent))) {
        percent = Number(percent).toFixed(1);
        countryFunFacts[country] = `${percent}% of people in ${country} have access to at least basic drinking water services. (World Bank, 2022)`;
      }
    }
  }
});

// Randomly select a country from the pool and display its flag
function selectRandomCountry() {
  const randomIndex = Math.floor(Math.random() * countries.length);
  correctCountry = countries[randomIndex].name;
  
  // Display the flag in the HTML
  const flagImg = document.getElementById("countryFlag");
  flagImg.src = countries[randomIndex].flag;
  flagImg.alt = `Flag of ${correctCountry}`;
}

// Helper function to show the popup with a custom message
function showPopup(title, message, countryName) {
  popupTitle.textContent = title;
  popupMessage.textContent = message;

  // Remove old project/fun fact section if it exists
  const oldSection = document.getElementById('projectOrFact');
  if (oldSection) oldSection.remove();

  // Create a new section
  const section = document.createElement('div');
  section.id = 'projectOrFact';
  section.style.marginTop = '1.5rem';

  // Check for projects
  if (countryProjects[countryName]) {
    section.innerHTML = `<h4>Check out this project in ${countryName}!</h4>`;
    const projectList = document.createElement('div');
    projectList.className = 'project-list';
    countryProjects[countryName].forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <img src="${project.thumbnail}" alt="Picture showing project in ${project.location}" class="project-thumbnail">
        <div class="project-location">${project.location}</div>
        <a href="${project.url}" target="_blank" class="project-link">View Project</a>
        </div>
      `;
      projectList.appendChild(card);
    });
    section.appendChild(projectList);
  } else if (countryFunFacts[countryName]) {
    section.innerHTML = `<h4>Did you know?</h4><p>${countryFunFacts[countryName]}</p>`;
  } else {
    section.innerHTML = `<h4>Did you know?</h4><p>No data available for this country.</p>`;
  }

  // Add the section to the popup
  document.querySelector(".popup").appendChild(section);
  popupOverlay.style.display = "flex";
}

// Helper function to hide the popup
function hidePopup() {
  popupOverlay.style.display = "none";
}

// Add event listener to the popup close button
popupCloseBtn.addEventListener("click", hidePopup);

// Helper function to show feedback for invalid guesses
function showInvalidGuessFeedback() {
  // Add a red border to the input
  countryInput.style.border = '2px solid red';
  // Show a message below the input (create if not exists)
  let feedback = document.getElementById('guessFeedback');
  if (!feedback) {
    feedback = document.createElement('div');
    feedback.id = 'guessFeedback';
    feedback.style.color = 'red';
    feedback.style.marginTop = '5px';
    countryInput.parentNode.appendChild(feedback);
  }
  feedback.textContent = 'Not a valid country. Please try again.';
}

// Helper function to clear feedback
function clearGuessFeedback() {
  countryInput.style.border = '';
  const feedback = document.getElementById('guessFeedback');
  if (feedback) {
    feedback.textContent = '';
  }
}

// Store GeoJSON data and map layer for highlighting
let geojsonLayer = null;
let geojsonData = null;

// Helper: Find a country feature by name (case-insensitive)
function findCountryFeature(name) {
  if (!geojsonData) return null;
  return geojsonData.features.find(f => {
    // Some country names in GeoJSON may differ slightly, so we use loose matching
    return f.properties.name && f.properties.name.toLowerCase() === name.toLowerCase();
  });
}

// Helper: Get proximity color
function getProximityColor(distance) {
  // 0 = correct, 1 = adjacent, 2 = close, 3 = medium, 4 = far, 5+ = very far
  if (distance === 0) return '#4FCB53'; // green
  if (distance === 1) return '#B71C1C'; // dark red
  if (distance === 2) return '#F44336'; // red
  if (distance === 3) return '#FF9800'; // orange
  if (distance === 4) return '#FFC907'; // yellow
  return '#fff'; // white
}

// Helper: Calculate proximity (very basic for beginners)
function getCountryProximity(guessName, correctName) {
  // If correct
  if (guessName.toLowerCase() === correctName.toLowerCase()) return 0;

  // If adjacent (shares a border)
  const guessFeature = findCountryFeature(guessName);
  const correctFeature = findCountryFeature(correctName);

  if (!guessFeature || !correctFeature) return 5; // very far if not found

  // Check if they are neighbors (using GeoJSON neighbors property if available)
  // For beginners, we use bounding box overlap as a simple proxy for adjacency
  const g = guessFeature.bbox || guessFeature.geometry && L.geoJSON(guessFeature).getBounds();
  const c = correctFeature.bbox || correctFeature.geometry && L.geoJSON(correctFeature).getBounds();
  if (g && c && L.latLngBounds(g).intersects(L.latLngBounds(c))) return 1;

  // Otherwise, use distance between centroids
  const guessCenter = L.geoJSON(guessFeature).getBounds().getCenter();
  const correctCenter = L.geoJSON(correctFeature).getBounds().getCenter();
  const dist = guessCenter.distanceTo(correctCenter) / 1000; // in km

  if (dist < 3000) return 2; // close
  if (dist < 6000) return 3; // medium
  if (dist < 9000) return 4; // far

  return 5; // very far
}

// Store guessed country names for coloring
const guessedCountries = [];

// Mode settings
let mode = "daily"; // Default mode
let score = 0; // Score for blitz mode
let timer = null; // Timer for blitz mode

// Reference to mode switch checkbox
const modeSwitch = document.getElementById("modeSwitch");

// Daily mode country (fixed for the day)
const dailyCountry = "Angola"; // Example fixed country

// Update mode based on toggle
modeSwitch.addEventListener("change", () => {
  mode = modeSwitch.checked ? "blitz" : "daily";
  resetGame();
});

// Reset the game based on the selected mode
function resetGame() {
  clearInterval(timer); // Clear any existing timer

  // Remove score and timer displays if they exist
  const scoreDisplay = document.getElementById('scoreDisplay');
  if (scoreDisplay) scoreDisplay.remove();
  const timerDisplay = document.getElementById('timerDisplay');
  if (timerDisplay) timerDisplay.remove();

  score = 0; // Reset score
  guessesList.innerHTML = ""; // Clear guesses
  guessedCountries.length = 0; // Clear guessed countries
  clearGuessFeedback();
  countryInput.disabled = false;
  guessBtn.disabled = false;

  if (mode === "daily") {
    correctCountry = dailyCountry; // Set the fixed daily country
    const flagImg = document.getElementById("countryFlag");
    const dailyCountryData = countries.find(c => c.name === dailyCountry);
    if (dailyCountryData) {
        flagImg.src = dailyCountryData.flag;
        flagImg.alt = `Flag of ${dailyCountry}`;
    }
  } else {
    // Create and display score for blitz mode
    const newScoreDisplay = document.createElement('div');
    newScoreDisplay.id = 'scoreDisplay';
    newScoreDisplay.style.fontWeight = 'bold';
    newScoreDisplay.style.marginTop = '10px';
    newScoreDisplay.textContent = `Score: ${score}`;
    countryInput.parentNode.appendChild(newScoreDisplay);

    selectRandomCountry(); // Pick a random country for blitz mode
    startTimer(); // Start the 5-minute timer
  }
}

// Start the 30 seconds timer for blitz mode
function startTimer() {
  let timeLeft = 30; // 30 seconds
  const timerDisplay = document.createElement("div");
  timerDisplay.id = "timerDisplay";
  timerDisplay.style.marginTop = "10px";
  timerDisplay.style.fontWeight = "bold";
  countryInput.parentNode.appendChild(timerDisplay);

  timer = setInterval(() => {
    timeLeft--;
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `Time left: ${seconds}`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      showPopup("Time's Up!", `You ran out of time. Your final score is ${score}. The answer was ${correctCountry}.`, correctCountry);
      resetGame();
    }
  }, 1000);
}

// When the Guess button is clicked
guessBtn.addEventListener("click", () => {
  const guess = countryInput.value.trim();

  if (guess === "") {
    return; // Do nothing if the input is empty
  }

  const isValidCountry = countries.some(country => country.name.toLowerCase() === guess.toLowerCase());
  const scoreDisplay = document.getElementById('scoreDisplay');

  if (!isValidCountry) {
    showInvalidGuessFeedback();
    if (mode === "blitz") {
        score -= 25;
        if (scoreDisplay) scoreDisplay.textContent = `Score: ${score}`;
    }
    return;
  }

  clearGuessFeedback();

  // Add the guess to the list of guessed countries for map highlighting
  guessedCountries.push(guess);

  // Add the guess to the visual list (with flag and name)
  const listItem = document.createElement("li");
  listItem.className = "guess-item";
  // Find the flag URL for the guessed country
  const countryObj = countries.find(c => c.name.toLowerCase() === guess.toLowerCase());
  const flagUrl = countryObj ? countryObj.flag : "img/flag-placeholder.webp";
  const flagImg = document.createElement("img");
  flagImg.src = flagUrl;
  flagImg.alt = `Flag of ${guess}`;
  flagImg.className = "guess-flag";
  const nameSpan = document.createElement("span");
  nameSpan.className = "guess-country";
  nameSpan.textContent = guess;
  listItem.appendChild(flagImg);
  listItem.appendChild(nameSpan);
  guessesList.appendChild(listItem);

  // Highlight guessed countries on the map for both modes
  if (geojsonLayer) {
    geojsonLayer.setStyle(feature => {
      // If this country was guessed, color by proximity
      const guessed = guessedCountries.find(name => name.toLowerCase() === feature.properties.name.toLowerCase());
      if (guessed) {
        const proximity = getCountryProximity(guessed, correctCountry);
        return {
          color: '#333',
          weight: 2,
          fillColor: getProximityColor(proximity),
          fillOpacity: 0.8
        };
      }
      // Default style
      return {
        color: '#2E9DF7',
        weight: 1,
        fillColor: '#4FCB53',
        fillOpacity: 0.5
      };
    });
  }

  if (mode === "daily") {
    if (guess.toLowerCase() === correctCountry.toLowerCase()) {
      showPopup("Congratulations!", `You guessed the daily country: ${correctCountry}`, correctCountry);
      countryInput.disabled = true; // Disable further input
      guessBtn.disabled = true; // Disable the button
    }
    // For incorrect guesses, we've already added it to the list and colored the map.
  } else { // This is blitz mode
    // Check if the guess is correct
    if (guess.toLowerCase() === correctCountry.toLowerCase()) {
      score += 100; // Add points for correct guess
      selectRandomCountry(); // Pick a new country
      guessesList.innerHTML = ""; // Clear previous guesses
      guessedCountries.length = 0; // Clear guessed countries
      // Reset map coloring
      if (geojsonLayer) geojsonLayer.setStyle({
        color: '#2E9DF7',
        weight: 1,
        fillColor: '#4FCB53',
        fillOpacity: 0.5
      });
    } else {
      score -= 25; // Deduct points for incorrect guess
    }
    if (scoreDisplay) scoreDisplay.textContent = `Score: ${score}`;
  }

  // Clear the input field for the next guess
  countryInput.value = "";
});

// Allow pressing Enter to submit the guess
countryInput.addEventListener("keypress", (event) => {
  // If the key pressed is Enter, trigger the button click
  if (event.key === "Enter") {
    guessBtn.click();
  }
});

// --- BEGINNER-FRIENDLY INTERACTIVE MAP WITH LEAFLET ---
// Wait for the DOM to load before running map code
window.addEventListener('DOMContentLoaded', () => {
  // Create the map and set the initial view to the world
  const map = L.map('map', {
    zoomControl: true, // Use default zoom controls
    attributionControl: false, // Hide attribution for simplicity
  }).setView([0, 0], 3); // Centered on the world

  // Add a basic tile layer (the map background)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 6,
    minZoom: 3
  }).addTo(map);

  // OPTIONAL: Add a simple GeoJSON world outline (countries)
  // This uses a free GeoJSON file from a CDN
  fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
    .then(response => response.json())
    .then(data => {
      geojsonData = data; // Store for later
      geojsonLayer = L.geoJSON(geojsonData, {
        style: {
          color: '#2E9DF7', // Charity: water blue
          weight: 1,
          fillColor: '#4fcb53', // Charity: water green
          fillOpacity: 0.5
        }
      }).addTo(map);
    });
});

// Initialize the game on page load to set the correct mode and country
resetGame();

