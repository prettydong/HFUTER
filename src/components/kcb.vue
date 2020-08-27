<template>
    <div class="kcb-container">
        <div style="color:white"></div>
        <div class="table">
            <div class="day" v-for="(day,index1) in c_table" :key="index1" >
                <div v-for="(course,index2) in day" :key="index2">
                    <div class="course" v-if = "course[0]!=''"
                    v-bind:style="{'left': index1*15 + 15 + '%' ,
                                    'top': index2*15 + 15 + '%' , 
                                    'background-color': course[1]}">
                        <div class="course-text">
                            {{course[0]}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name :"kcb",
    data(){
        var courses_table = new Array()
        var courses_color = ["rgb(190, 210, 248)",
                             "rgb(190, 210, 248)",
                             "rgb(190, 248, 212)",
                             "rgb(248, 204, 190)"]
        for (var day=0;day<5;day++){
            courses_table[day]=new Array()
            for (var courses = 0 ;courses<5;courses++){
                var temp = Math.floor(Math.random()*4)
                if ( temp==0 ) courses_table[day][courses] = ["",courses_color[0]]
                if ( temp==1 ) courses_table[day][courses] = ["语文",courses_color[1]]
                if ( temp==2 ) courses_table[day][courses] = ["数学",courses_color[2]]
                if ( temp==3 ) courses_table[day][courses] = ["英语",courses_color[3]]
            }
        }
        return {c_table:courses_table,courses_color}
    },
    created(){
        //when creating and automatic run
    },
    methods:{

    }
}
</script>

<style lang='less' scoped>
    .kcb-container{
        background-color : #2b4b6b;
        height: 100%;
    }
    .table{
        width: 90%;
        background-color: rgb(252, 244, 235);
        height: 90%;
        left:5%;
        bottom: 5%;
        position: absolute;
        border-radius: 15px;
        box-shadow: 2px 5px 7px 3px #130f00;
    } 
    .course{
        width:12%;
        height: 12%;
        background-color: rgb(190, 210, 248);
        left:10%;
        top: 10%;
        position: absolute;
        box-shadow: 1px 2px 3px 0.5px rgb(45, 64, 99);
        transform:rotate(2deg);
        transition: 0.2s;
    }
    .course:hover{
        transform: scale(1.1);
        transition: 0.2s;
    }
    .course-text{
        text-align: center;
        font-family: FZYaoti;
        font-size:20px;
        font-weight:bold;
        position: relative;
        top:50%-20px;
    }
</style>