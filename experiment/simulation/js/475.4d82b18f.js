"use strict";(self["webpackChunkexp_7"]=self["webpackChunkexp_7"]||[]).push([[475],{1475:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});n(7658);var a=n(3396);const o=t=>((0,a.dD)("data-v-e9833de6"),t=t(),(0,a.Cn)(),t),r={class:"flex"},s=o((()=>(0,a._)("div",{class:"codebox"},[(0,a._)("h3",{style:{"font-family":"monospace"}},"Test Driver.java"),(0,a._)("pre",null,'...\n\npublic class TestDriver {\n\t\n\tpublic static void main(String[] args) throws ParseException {\n\t\t// TODO Auto-generated method stub\n\t\t\n\t\tRentalSystem rentalSystem = new RentalSystem();\n\t\t\n\t\trentalSystem.clerkobj=new Clerk[1];\n\t\trentalSystem.clerkobj[0]=new Clerk("EFG", "efg@gmail.com");\n\t\t\n\t\trentalSystem.cobj= new Customer[3];\n\t\trentalSystem.cobj[0]=new Customer("ABC", "abc@gmail.com");\n\t\trentalSystem.cobj[1]=new Customer("DEF", 8654678976L);\n\t\trentalSystem.cobj[2]=new Customer("GHI", "ghi@gmail.com", 1234567890L);\n\t\trentalSystem.cobj[0].setCity("Coimbatore");\n\t\trentalSystem.cobj[1].setCity("Coimbatore");\n\t\trentalSystem.cobj[2].setCity("Chennai");\n\t\t\n\t\trentalSystem.vobj = new Vehicle[1];\n\t\trentalSystem.vobj[0]=new Vehicle(1234);\n\t\t\n\t\trentalSystem.robj=new Reservation[1];\n\t\trentalSystem.robj[0]= new Reservation(rentalSystem.cobj[0],rentalSystem.vobj[0]);\n\t\tSimpleDateFormat sdformat = new SimpleDateFormat("yyyy-MM-dd");\n\t    Date d = sdformat.parse("2022-02-29");\n\t\trentalSystem.robj[0].setBookingDate(d);\n\t\trentalSystem.robj[0].setContractStatus("Reservation not released");\n\t\t\n\t\trentalSystem.visitOffice(rentalSystem.robj[0]);\n\t}\t\n}\n\n\n            ')],-1))),l={class:"outbox"},i=(0,a.uE)('<p data-v-e9833de6>OUTPUT</p><p style="color:#fff;" data-v-e9833de6>Vehicle is available, initiating contract..</p><p style="color:#fff;" data-v-e9833de6>Reservation released</p><p style="color:#fff;" data-v-e9833de6>Vehicle key handedover</p><br data-v-e9833de6><p style="color:#fff;" data-v-e9833de6>Process finished with exit code 0</p><div style="height:100px;background-color:#202020;" data-v-e9833de6></div>',7);function c(t,e){return(0,a.wg)(),(0,a.iD)("main",null,[(0,a._)("div",r,[s,(0,a._)("div",l,[i,(0,a._)("button",{class:"button-9",id:"btn1",onClick:e[0]||(e[0]=e=>t.$router.push("/congratulations"))},"Continue")])])])}var d=n(89);const m={},y=(0,d.Z)(m,[["render",c],["__scopeId","data-v-e9833de6"]]);var b=y}}]);
//# sourceMappingURL=475.4d82b18f.js.map