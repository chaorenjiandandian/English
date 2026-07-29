/* DATA module - loaded externally to keep initial JS tiny */
const PHOTOS = {"dog":"assets/dog.webp", "cat":"assets/cat.webp", "lion":"assets/lion.webp", "elephant":"assets/elephant.webp", "rabbit":"assets/rabbit.webp", "monkey":"assets/monkey.webp", "bird":"assets/bird.webp", "fish":"assets/fish.webp", "duck":"assets/duck.webp", "cow":"assets/cow.webp", "pig":"assets/pig.webp", "bear":"assets/bear.webp", "tiger":"assets/tiger.webp", "zebra":"assets/zebra.webp", "giraffe":"assets/giraffe.webp", "panda":"assets/panda.webp", "horse":"assets/horse.webp", "sheep":"assets/sheep.webp", "penguin":"assets/penguin.webp", "chicken":"assets/chicken.webp", "apple":"assets/apple.webp", "banana":"assets/banana.webp", "orange":"assets/orange.webp", "grape":"assets/grape.webp", "strawberry":"assets/strawberry.webp", "watermelon":"assets/watermelon.webp", "peach":"assets/peach.webp", "pear":"assets/pear.webp", "cherry":"assets/cherry.webp", "mango":"assets/mango.webp", "pineapple":"assets/pineapple.webp", "kiwi":"assets/kiwi.webp", "lemon":"assets/lemon.webp", "coconut":"assets/coconut.webp", "avocado":"assets/avocado.webp", "tomato":"assets/tomato.webp", "bread":"assets/bread.webp", "milk":"assets/milk.webp", "rice":"assets/rice.webp", "egg":"assets/egg.webp", "noodles":"assets/noodles.webp", "cake":"assets/cake.webp", "cookie":"assets/cookie.webp", "juice":"assets/juice.webp", "ice cream":"assets/ice cream.webp", "water":"assets/water.webp", "pizza":"assets/pizza.webp", "carrot":"assets/carrot.webp", "cheese":"assets/cheese.webp", "honey":"assets/honey.webp", "salad":"assets/salad.webp", "corn":"assets/corn.webp", "car":"assets/car.webp", "bus":"assets/bus.webp", "train":"assets/train.webp", "plane":"assets/plane.webp", "ship":"assets/ship.webp", "bike":"assets/bike.webp", "fire truck":"assets/fire truck.webp", "rocket":"assets/rocket.webp", "helicopter":"assets/helicopter.webp", "taxi":"assets/taxi.webp", "ambulance":"assets/ambulance.webp", "scooter":"assets/scooter.webp", "shirt":"assets/shirt.webp", "pants":"assets/pants.webp", "dress":"assets/dress.webp", "sock":"assets/sock.webp", "shoe":"assets/shoe.webp", "hat":"assets/hat.webp", "coat":"assets/coat.webp", "glove":"assets/glove.webp", "scarf":"assets/scarf.webp", "boot":"assets/boot.webp", "tree":"assets/tree.webp", "flower":"assets/flower.webp", "leaf":"assets/leaf.webp", "mountain":"assets/mountain.webp", "sea":"assets/sea.webp", "beach":"assets/beach.webp", "butterfly":"assets/butterfly.webp", "bee":"assets/bee.webp", "ant":"assets/ant.webp", "rock":"assets/rock.webp", "bed":"assets/bed.webp", "chair":"assets/chair.webp", "door":"assets/door.webp", "window":"assets/window.webp", "cup":"assets/cup.webp", "spoon":"assets/spoon.webp", "ball":"assets/ball.webp", "book":"assets/book.webp", "teddy bear":"assets/teddy bear.webp", "balloon":"assets/balloon.webp", "sunny":"assets/sunny.webp", "rainy":"assets/rainy.webp", "cloudy":"assets/cloudy.webp", "snowy":"assets/snowy.webp", "windy":"assets/windy.webp", "storm":"assets/storm.webp", "rainbow":"assets/rainbow.webp", "moon":"assets/moon.webp", "star":"assets/star.webp", "eye":"assets/eye.webp", "nose":"assets/nose.webp", "mouth":"assets/mouth.webp", "ear":"assets/ear.webp", "hand":"assets/hand.webp", "foot":"assets/foot.webp", "tooth":"assets/tooth.webp", "daddy":"assets/daddy.webp", "mommy":"assets/mommy.webp", "baby":"assets/baby.webp", "grandpa":"assets/grandpa.webp", "grandma":"assets/grandma.webp", "brother":"assets/brother.webp", "sister":"assets/sister.webp", "happy":"assets/happy.webp", "sad":"assets/sad.webp", "angry":"assets/angry.webp", "sleepy":"assets/sleepy.webp", "surprised":"assets/surprised.webp", "laugh":"assets/laugh.webp", "love":"assets/love.webp", "yummy":"assets/yummy.webp", "run":"assets/run.webp", "walk":"assets/walk.webp", "jump":"assets/jump.webp", "clap":"assets/clap.webp", "dance":"assets/dance.webp", "sleep":"assets/sleep.webp", "eat":"assets/eat.webp", "drink":"assets/drink.webp", "hug":"assets/hug.webp", "wave":"assets/wave.webp", "draw":"assets/draw.webp", "read":"assets/read.webp", "red":"assets/red.webp", "yellow":"assets/yellow.webp", "blue":"assets/blue.webp", "green":"assets/green.webp", "orange_color":"assets/orange_color.webp", "purple":"assets/purple.webp", "pink":"assets/pink.webp", "brown":"assets/brown.webp", "black":"assets/black.webp", "white":"assets/white.webp", "Hello!":"assets/Hello!.webp", "Bye-bye!":"assets/Bye-bye!.webp", "Thank you!":"assets/Thank you!.webp", "Good morning!":"assets/Good morning!.webp", "Good night!":"assets/Good night!.webp", "I love you!":"assets/I love you!.webp", "Yes!":"assets/Yes!.webp", "Happy birthday!":"assets/Happy birthday!.webp", "Sorry!":"assets/Sorry!.webp", "Hooray!":"assets/Hooray!.webp", "Yummy yummy!":"assets/Yummy yummy!.webp", "family":"assets/family.webp", "No!":"assets/No!.webp", "toothbrush":"assets/toothbrush.webp", "bathtub":"assets/bathtub.webp", "alarm":"assets/alarm.webp", "standing":"assets/standing.webp", "kite":"assets/kite.webp", "octopus":"assets/octopus.webp", "queen":"assets/queen.webp", "umbrella":"assets/umbrella.webp", "violin":"assets/violin.webp", "box":"assets/box.webp", "potato":"assets/potato.webp", "cucumber":"assets/cucumber.webp", "onion":"assets/onion.webp", "mushroom":"assets/mushroom.webp", "broccoli":"assets/broccoli.webp", "eggplant":"assets/eggplant.webp", "pepper":"assets/pepper.webp", "garlic":"assets/garlic.webp", "robot":"assets/robot.webp", "puzzle":"assets/puzzle.webp", "yo-yo":"assets/yo-yo.webp", "game":"assets/game.webp", "doll":"assets/doll.webp", "guitar":"assets/guitar.webp", "piano":"assets/piano.webp", "drum":"assets/drum.webp", "trumpet":"assets/trumpet.webp", "saxophone":"assets/saxophone.webp", "bell":"assets/bell.webp", "music":"assets/music.webp", "basketball":"assets/basketball.webp", "baseball":"assets/baseball.webp", "tennis":"assets/tennis.webp", "badminton":"assets/badminton.webp", "ping pong":"assets/ping pong.webp", "swim":"assets/swim.webp", "medal":"assets/medal.webp", "headphone":"assets/headphone.webp", "speech":"assets/speech.webp", "abcimg":"assets/abcimg.webp", "astronaut":"assets/astronaut.webp", "alien":"assets/alien.webp", "satellite":"assets/satellite.webp", "telescope":"assets/telescope.webp", "comet":"assets/comet.webp", "whale":"assets/whale.webp", "dolphin":"assets/dolphin.webp", "shark":"assets/shark.webp", "crab":"assets/crab.webp", "turtle":"assets/turtle.webp", "shrimp":"assets/shrimp.webp", "seal":"assets/seal.webp", "ladybug":"assets/ladybug.webp", "snail":"assets/snail.webp", "caterpillar":"assets/caterpillar.webp", "spider":"assets/spider.webp", "worm":"assets/worm.webp", "doctor":"assets/doctor.webp", "firefighter":"assets/firefighter.webp", "police":"assets/police.webp", "teacher":"assets/teacher.webp", "cook":"assets/cook.webp", "farmer":"assets/farmer.webp", "pilot":"assets/pilot.webp", "singer":"assets/singer.webp", "cart":"assets/cart.webp", "soap":"assets/soap.webp", "broom":"assets/broom.webp", "candy":"assets/candy.webp", "lollipop":"assets/lollipop.webp", "chocolate":"assets/chocolate.webp", "donut":"assets/donut.webp", "cupcake":"assets/cupcake.webp", "popcorn":"assets/popcorn.webp", "pie":"assets/pie.webp", "waffle":"assets/waffle.webp", "pancake":"assets/pancake.webp", "fire":"assets/fire.webp", "up":"assets/up.webp", "down":"assets/down.webp", "phone":"assets/phone.webp", "computer":"assets/computer.webp", "TV":"assets/TV.webp", "camera":"assets/camera.webp", "watch":"assets/watch.webp", "light":"assets/light.webp", "key":"assets/key.webp", "gift":"assets/gift.webp", "crown":"assets/crown.webp", "candle":"assets/candle.webp", "firework":"assets/firework.webp", "birthday cake":"assets/birthday cake.webp", "fox":"assets/fox.webp", "koala":"assets/koala.webp", "hippo":"assets/hippo.webp", "crocodile":"assets/crocodile.webp", "kangaroo":"assets/kangaroo.webp", "owl":"assets/owl.webp", "frog":"assets/frog.webp", "mouse":"assets/mouse.webp", "blueberry":"assets/blueberry.webp", "melon":"assets/melon.webp", "tongue":"assets/tongue.webp", "leg":"assets/leg.webp", "arm":"assets/arm.webp", "tractor":"assets/tractor.webp", "police car":"assets/police car.webp", "truck":"assets/truck.webp", "boat":"assets/boat.webp", "soup":"assets/soup.webp", "hamburger":"assets/hamburger.webp", "fries":"assets/fries.webp", "dumpling":"assets/dumpling.webp", "sandwich":"assets/sandwich.webp", "lightning":"assets/lightning.webp", "scared":"assets/scared.webp", "silly":"assets/silly.webp", "cricket":"assets/cricket.webp", "beetle":"assets/beetle.webp", "earth":"assets/earth.webp", "motorcycle":"assets/motorcycle.webp", "van":"assets/van.webp", "dump truck":"assets/dump truck.webp", "crane":"assets/crane.webp", "jeep":"assets/jeep.webp", "kick scooter":"assets/kick scooter.webp", "roller skate":"assets/roller skate.webp", "ferry":"assets/ferry.webp", "speedboat":"assets/speedboat.webp", "subway":"assets/subway.webp", "tram":"assets/tram.webp", "monorail":"assets/monorail.webp", "canoe":"assets/canoe.webp", "sled":"assets/sled.webp", "cable car":"assets/cable car.webp", "mosquito":"assets/mosquito.webp", "fly":"assets/fly.webp", "cockroach":"assets/cockroach.webp", "scorpion":"assets/scorpion.webp", "web":"assets/web.webp", "jellyfish":"assets/jellyfish.webp", "lobster":"assets/lobster.webp", "squid":"assets/squid.webp", "tropical fish":"assets/tropical fish.webp", "pufferfish":"assets/pufferfish.webp", "otter":"assets/otter.webp", "seashell":"assets/seashell.webp", "coral":"assets/coral.webp", "clam":"assets/clam.webp", "hair":"assets/hair.webp", "hermit crab":"assets/hermit crab.webp", "seahorse":"assets/seahorse.webp", "starfish":"assets/starfish.webp", "eel":"assets/eel.webp", "orca":"assets/orca.webp", "stingray":"assets/stingray.webp", "circle":"assets/circle.webp", "square":"assets/square.webp", "triangle":"assets/triangle.webp", "rectangle":"assets/rectangle.webp", "heart":"assets/heart.webp", "diamond":"assets/diamond.webp", "oval":"assets/oval.webp", "in":"assets/in.webp", "on":"assets/on.webp", "under":"assets/under.webp", "behind":"assets/behind.webp", "in front of":"assets/in front of.webp", "next to":"assets/next to.webp", "between":"assets/between.webp", "slide":"assets/slide.webp", "swing":"assets/swing.webp", "seesaw":"assets/seesaw.webp", "sandbox":"assets/sandbox.webp", "climbing frame":"assets/climbing frame.webp", "merry-go-round":"assets/merry-go-round.webp", "ladder":"assets/ladder.webp", "toilet paper":"assets/toilet paper.webp", "mirror":"assets/mirror.webp", "shower":"assets/shower.webp", "shampoo":"assets/shampoo.webp", "toothpaste":"assets/toothpaste.webp", "towel":"assets/towel.webp", "plate":"assets/plate.webp", "bowl":"assets/bowl.webp", "fork":"assets/fork.webp", "knife":"assets/knife.webp", "napkin":"assets/napkin.webp", "fridge":"assets/fridge.webp", "oven":"assets/oven.webp", "potty":"assets/potty.webp", "wipe":"assets/wipe.webp", "flush":"assets/flush.webp", "wash hands":"assets/wash hands.webp", "pull up pants":"assets/pull up pants.webp", "go potty":"assets/go potty.webp", "all done":"assets/all done.webp", "clean":"assets/clean.webp", "squirrel":"assets/squirrel.webp", "deer":"assets/deer.webp", "hedgehog":"assets/hedgehog.webp", "parrot":"assets/parrot.webp", "wolf":"assets/wolf.webp", "bat":"assets/bat.webp", "crawl":"assets/crawl.webp", "kick":"assets/kick.webp", "throw":"assets/throw.webp", "catch":"assets/catch.webp", "sing":"assets/sing.webp", "whisper":"assets/whisper.png", "smile":"assets/smile.png", "nod":"assets/nod.webp", "proud":"assets/proud.webp", "shy":"assets/shy.webp", "excited":"assets/excited.webp", "bored":"assets/bored.webp", "lonely":"assets/lonely.webp", "curious":"assets/curious.webp", "aphid":"assets/aphid.webp", "centipede":"assets/centipede.webp", "cicada":"assets/cicada.webp", "dragonfly":"assets/dragonfly.webp", "earwig":"assets/earwig.webp", "firefly":"assets/firefly.webp", "flea":"assets/flea.png", "grasshopper":"assets/grasshopper.webp", "mantis":"assets/mantis.webp", "moth":"assets/moth.webp", "silkworm":"assets/silkworm.webp", "slug":"assets/slug.webp", "termite":"assets/termite.webp", "tick":"assets/tick.webp", "wasp":"assets/wasp.webp", "sand":"assets/sand.webp", "seat":"assets/seat.webp", "traffic":"assets/traffic.webp", "crosswalk":"assets/crosswalk.webp", "medicine":"assets/medicine.webp", "thermometer":"assets/thermometer.webp", "tissue":"assets/tissue.webp", "cough":"assets/cough.webp", "sick":"assets/sick.webp", "hurry":"assets/hurry.webp", "one":"assets/one.webp", "two":"assets/two.webp", "three":"assets/three.webp", "four":"assets/four.webp", "five":"assets/five.webp", "six":"assets/six.webp", "seven":"assets/seven.webp", "eight":"assets/eight.webp", "nine":"assets/nine.webp", "ten":"assets/ten.webp", "eleven":"assets/eleven.webp", "twelve":"assets/twelve.webp", "thirteen":"assets/thirteen.webp", "fourteen":"assets/fourteen.webp", "fifteen":"assets/fifteen.webp", "sixteen":"assets/sixteen.webp", "seventeen":"assets/seventeen.webp", "eighteen":"assets/eighteen.webp", "nineteen":"assets/nineteen.webp", "twenty":"assets/twenty.webp", "morning":"assets/morning.webp", "afternoon":"assets/afternoon.webp", "evening":"assets/evening.webp", "night":"assets/night.webp", "today":"assets/today.webp", "tomorrow":"assets/tomorrow.webp", "yesterday":"assets/yesterday.webp", "now":"assets/now.webp"};PHOTOS['sun'] = PHOTOS['sunny'];
PHOTOS['big'] = PHOTOS['elephant']; PHOTOS['small'] = PHOTOS['ant'];
PHOTOS['hot'] = PHOTOS['fire'];     PHOTOS['cold'] = PHOTOS['snowy'];
PHOTOS['fast'] = PHOTOS['rocket'];  PHOTOS['slow'] = PHOTOS['snail'];

const SENT_PHOTOS = {"p01-01":"assets/p01-01.webp", "p01-02":"assets/p01-02.webp", "p01-03":"assets/p01-03.webp", "p01-04":"assets/p01-04.webp", "p01-05":"assets/p01-05.webp", "p01-06":"assets/p01-06.webp", "p02-01":"assets/p02-01.webp", "p02-02":"assets/p02-02.webp", "p02-03":"assets/p02-03.webp", "p02-04":"assets/p02-04.webp", "p02-05":"assets/p02-05.webp", "p02-06":"assets/p02-06.webp", "p03-01":"assets/p03-01.webp", "p03-02":"assets/p03-02.webp", "p03-03":"assets/p03-03.webp", "p03-04":"assets/p03-04.webp", "p03-05":"assets/p03-05.webp", "p03-06":"assets/p03-06.webp", "p04-01":"assets/p04-01.webp", "p04-02":"assets/p04-02.webp", "p04-03":"assets/p04-03.webp", "p04-04":"assets/p04-04.webp", "p04-05":"assets/p04-05.webp", "p04-06":"assets/p04-06.webp", "p04-07":"assets/p04-07.webp", "p04-08":"assets/p04-08.webp", "p05-01":"assets/p05-01.webp", "p05-02":"assets/p05-02.webp", "p05-03":"assets/p05-03.webp", "p05-04":"assets/p05-04.webp", "p05-05":"assets/p05-05.webp", "p05-06":"assets/p05-06.webp", "p06-01":"assets/p06-01.webp", "p06-02":"assets/p06-02.webp", "p06-03":"assets/p06-03.webp", "p06-04":"assets/p06-04.webp", "p06-05":"assets/p06-05.webp", "p06-06":"assets/p06-06.webp", "p07-01":"assets/p07-01.webp", "p07-02":"assets/p07-02.webp", "p07-03":"assets/p07-03.webp", "p07-04":"assets/p07-04.webp", "p07-05":"assets/p07-05.webp", "p07-06":"assets/p07-06.webp", "p07-07":"assets/p07-07.webp", "p07-08":"assets/p07-08.webp", "p07-09":"assets/p07-09.webp", "p07-10":"assets/p07-10.webp", "p08-01":"assets/p08-01.webp", "p08-02":"assets/p08-02.webp", "p08-03":"assets/p08-03.webp", "p08-04":"assets/p08-04.webp", "p08-05":"assets/p08-05.webp", "p08-06":"assets/p08-06.webp", "p09-01":"assets/p09-01.webp", "p09-02":"assets/p09-02.webp", "p09-03":"assets/p09-03.webp", "p09-04":"assets/p09-04.webp", "p09-05":"assets/p09-05.webp", "p09-06":"assets/p09-06.webp", "p10-01":"assets/p10-01.webp", "p10-02":"assets/p10-02.webp", "p10-03":"assets/p10-03.webp", "p10-04":"assets/p10-04.webp", "p10-05":"assets/p10-05.webp", "p10-06":"assets/p10-06.webp", "p11-01":"assets/p11-01.webp", "p11-02":"assets/p11-02.webp", "p11-03":"assets/p11-03.webp", "p11-04":"assets/p11-04.webp", "p11-05":"assets/p11-05.webp", "p11-06":"assets/p11-06.webp", "p11-07":"assets/p11-07.webp", "p11-08":"assets/p11-08.webp", "p11-09":"assets/p11-09.webp", "p11-10":"assets/p11-10.webp", "p12-01":"assets/p12-01.webp", "p12-02":"assets/p12-02.webp", "p12-03":"assets/p12-03.webp", "p12-04":"assets/p12-04.webp", "p12-05":"assets/p12-05.webp", "p12-06":"assets/p12-06.webp", "p13-01":"assets/p13-01.webp", "p13-02":"assets/p13-02.webp", "p13-03":"assets/p13-03.webp", "p13-04":"assets/p13-04.webp", "p13-05":"assets/p13-05.webp", "p13-06":"assets/p13-06.webp", "p14-01":"assets/p14-01.webp", "p14-02":"assets/p14-02.webp", "p14-03":"assets/p14-03.webp", "p14-04":"assets/p14-04.webp", "p14-05":"assets/p14-05.webp", "p14-06":"assets/p14-06.webp", "p15-01":"assets/p15-01.webp", "p15-02":"assets/p15-02.webp", "p15-03":"assets/p15-03.webp", "p15-04":"assets/p15-04.webp", "p15-05":"assets/p15-05.webp", "p15-06":"assets/p15-06.webp", "p15-07":"assets/p15-07.webp", "p16-01":"assets/p16-01.webp", "p16-02":"assets/p16-02.webp", "p16-04":"assets/p16-04.webp", "p16-05":"assets/p16-05.webp", "p16-06":"assets/p16-06.webp", "p17-01":"assets/p17-01.webp", "p17-02":"assets/p17-02.webp", "p17-03":"assets/p17-03.webp", "p17-04":"assets/p17-04.webp", "p17-05":"assets/p17-05.webp", "p17-06":"assets/p17-06.webp", "p18-01":"assets/p18-01.webp", "p18-02":"assets/p18-02.webp", "p18-03":"assets/p18-03.webp", "p18-04":"assets/p18-04.webp", "p18-05":"assets/p18-05.webp", "p18-06":"assets/p18-06.webp"};

const SONG_AUDIO = {"Twinkle Twinkle":"assets/audio_Twinkle Twinkle.mpeg", "Rain, Rain, Go Away":"assets/audio_Rain, Rain, Go Away.mpeg", "Head, Shoulders, Knees and Toes":"assets/audio_Head, Shoulders, Knees and Toes.mpeg", "The Wheels on the Bus":"assets/audio_The Wheels on the Bus.mpeg", "Row Row Row Your Boat":"assets/audio_Row Row Row Your Boat.mpeg", "Five Little Ducks":"assets/audio_Five Little Ducks.mpeg", "Baby Shark":"assets/audio_Baby Shark.mpeg", "Open Shut Them":"assets/audio_Open Shut Them.mpeg", "Walking Walking":"assets/audio_Walking Walking.mpeg", "One Little Finger":"assets/audio_One Little Finger.mpeg", "Hello Hello!":"assets/audio_Hello Hello!.mpeg", "Yes, I Can!":"assets/audio_Yes, I Can!.mpeg", "Little Snowflake":"assets/audio_Little Snowflake.mpeg", "If You're Happy":"assets/audio_if_youre_happy.mp3"};


const THEMES = [
  { id:'animals', en:'Animals', zh:'动物', ic:'🦁', words:[
    ['🐶','dog','小狗'],['🐱','cat','小猫'],['🦁','lion','狮子'],['🐘','elephant','大象'],
    ['🐰','rabbit','兔子'],['🐵','monkey','猴子'],['🐦','bird','小鸟'],['🐟','fish','小鱼'],
    ['🦆','duck','鸭子'],['🐮','cow','奶牛'],['🐷','pig','小猪'],['🐻','bear','小熊'],
    ['🐯','tiger','老虎'],['🦓','zebra','斑马'],['🦒','giraffe','长颈鹿'],['🐼','panda','熊猫'],
    ['🐴','horse','马'],['🐑','sheep','绵羊'],['🐧','penguin','企鹅'],['🐔','chicken','鸡'],
    ['🦊','fox','狐狸'],['🐨','koala','考拉'],['🦛','hippo','河马'],['🐊','crocodile','鳄鱼'],
    ['🦘','kangaroo','袋鼠'],['🦉','owl','猫头鹰'],['🐸','frog','青蛙'],['🐭','mouse','老鼠'],
    ['🐿️','squirrel','松鼠'],['🦌','deer','鹿'],['🦔','hedgehog','刺猬'],
    ['🦜','parrot','鹦鹉'],['🐺','wolf','狼'],['🦇','bat','蝙蝠']]},
  { id:'fruits', en:'Fruits', zh:'水果', ic:'🍎', words:[
    ['🍎','apple','苹果'],['🍌','banana','香蕉'],['🍊','orange','橙子'],['🍇','grape','葡萄'],
    ['🍓','strawberry','草莓'],['🍉','watermelon','西瓜'],['🍑','peach','桃子'],['🍐','pear','梨'],
    ['🍒','cherry','樱桃'],['🥭','mango','芒果'],['🍍','pineapple','菠萝'],['🥝','kiwi','猕猴桃'],
    ['🍋','lemon','柠檬'],['🥥','coconut','椰子'],['🥑','avocado','牛油果'],['🍅','tomato','西红柿'],
    ['🫐','blueberry','蓝莓'],['🍈','melon','甜瓜']]},
  { id:'colors', en:'Colors', zh:'颜色', ic:'🌈', words:[
    ['🔴','red','红色'],['🟡','yellow','黄色'],['🔵','blue','蓝色'],['🟢','green','绿色'],
    ['🟠','orange','橙色'],['🟣','purple','紫色'],['🩷','pink','粉色'],['🟤','brown','棕色'],
    ['⚫','black','黑色'],['⚪','white','白色']]},
  { id:'numbers', en:'Numbers', zh:'数字', ic:'🔢', words:[
    ['1️⃣','one','一'],['2️⃣','two','二'],['3️⃣','three','三'],['4️⃣','four','四'],['5️⃣','five','五'],
    ['6️⃣','six','六'],['7️⃣','seven','七'],['8️⃣','eight','八'],['9️⃣','nine','九'],['🔟','ten','十'],
    ['1️⃣1️⃣','eleven','十一'],['1️⃣2️⃣','twelve','十二'],['1️⃣3️⃣','thirteen','十三'],['1️⃣4️⃣','fourteen','十四'],
    ['1️⃣5️⃣','fifteen','十五'],['1️⃣6️⃣','sixteen','十六'],['1️⃣7️⃣','seventeen','十七'],['1️⃣8️⃣','eighteen','十八'],
    ['1️⃣9️⃣','nineteen','十九'],['2️⃣0️⃣','twenty','二十']]},
  { id:'body', en:'My Body', zh:'身体', ic:'👶', words:[
    ['👀','eye','眼睛'],['👃','nose','鼻子'],['👄','mouth','嘴巴'],['👂','ear','耳朵'],
    ['✋','hand','手'],['🦶','foot','脚'],['💇','hair','头发'],['🦷','tooth','牙齿'],
    ['👅','tongue','舌头'],['🦵','leg','腿'],['💪','arm','手臂']]},
  { id:'vehicles', en:'Vehicles', zh:'交通工具', ic:'🚗', words:[
    ['🚗','car','汽车'],['🚌','bus','公交车'],['🚂','train','火车'],['✈️','plane','飞机'],
    ['🚢','ship','轮船'],['🚲','bike','自行车'],['🚒','fire truck','消防车'],['🚀','rocket','火箭'],
    ['🚁','helicopter','直升机'],['🚕','taxi','出租车'],['🚑','ambulance','救护车'],['🛵','scooter','小摩托'],
    ['🚜','tractor','拖拉机'],['🚓','police car','警车'],['🚚','truck','卡车'],['⛵','boat','帆船'],
    ['🏍️','motorcycle','摩托车'],['🚐','van','面包车'],['🚛','dump truck','翻斗车'],['🏗️','crane','起重机'],
    ['🚙','jeep','越野车'],['🛴','kick scooter','滑板车'],['🛼','roller skate','轮滑鞋'],['⛴️','ferry','渡轮'],
    ['🚤','speedboat','快艇'],['🚇','subway','地铁'],['🚊','tram','有轨电车'],['🚝','monorail','单轨列车'],
    ['🛶','canoe','独木舟'],['🛷','sled','雪橇'],['🚡','cable car','缆车']]},
  { id:'food', en:'Food', zh:'食物', ic:'🍞', words:[
    ['🍞','bread','面包'],['🥛','milk','牛奶'],['🍚','rice','米饭'],['🥚','egg','鸡蛋'],
    ['🍜','noodles','面条'],['🍰','cake','蛋糕'],['🍪','cookie','饼干'],['🧃','juice','果汁'],
    ['🍦','ice cream','冰淇淋'],['💧','water','水'],['🍕','pizza','披萨'],['🥕','carrot','胡萝卜'],
    ['🧀','cheese','奶酪'],['🍯','honey','蜂蜜'],['🥗','salad','沙拉'],['🌽','corn','玉米'],
    ['🍲','soup','汤'],['🍔','hamburger','汉堡'],['🍟','fries','薯条'],['🥟','dumpling','饺子'],['🥪','sandwich','三明治']]},
  { id:'family', en:'Family', zh:'家人', ic:'👨‍👩‍👧', words:[
    ['👨','daddy','爸爸'],['👩','mommy','妈妈'],['👶','baby','宝宝'],['👴','grandpa','爷爷'],
    ['👵','grandma','奶奶'],['👦','brother','兄弟'],['👧','sister','姐妹'],['👨‍👩‍👧','family','一家人']]},
  { id:'weather', en:'Weather', zh:'天气', ic:'⛅', words:[
    ['☀️','sunny','晴天'],['🌧️','rainy','下雨'],['⛅','cloudy','多云'],['❄️','snowy','下雪'],
    ['💨','windy','刮风'],['⛈️','storm','暴风雨'],['⚡','lightning','闪电'],['🌈','rainbow','彩虹'],['🌙','moon','月亮'],['⭐','star','星星']]},
  { id:'actions', en:'Actions', zh:'动作', ic:'🏃', words:[
    ['🏃','run','跑'],['🚶','walk','走'],['🤸','jump','跳'],['👏','clap','拍手'],
    ['💃','dance','跳舞'],['😴','sleep','睡觉'],['🍽️','eat','吃'],['🥤','drink','喝'],
    ['🤗','hug','拥抱'],['👋','wave','挥手'],['🎨','draw','画画'],['📖','read','读书'],['🏊','swim','游泳'],
    ['🧗','crawl','爬'],['🦶','kick','踢'],['🤾','throw','扔'],['🤲','catch','接'],
    ['🎤','sing','唱歌'],['🤫','whisper','小声说'],['😊','smile','微笑'],['🙂','nod','点头']]},
  { id:'clothes', en:'Clothes', zh:'衣服', ic:'👕', words:[
    ['👕','shirt','上衣'],['👖','pants','裤子'],['👗','dress','裙子'],['🧦','sock','袜子'],
    ['👟','shoe','鞋子'],['🧢','hat','帽子'],['🧥','coat','外套'],['🧤','glove','手套'],
    ['🧣','scarf','围巾'],['👢','boot','靴子']]},
  { id:'nature', en:'Nature', zh:'大自然', ic:'🌳', words:[
    ['🌳','tree','树'],['🌸','flower','花'],['🍃','leaf','叶子'],['⛰️','mountain','山'],
    ['🌊','sea','大海'],['🏖️','beach','沙滩'],['🦋','butterfly','蝴蝶'],['🐝','bee','蜜蜂'],
    ['🐜','ant','蚂蚁'],['🪨','rock','石头']]},
  { id:'home', en:'My Home', zh:'我的家', ic:'🏠', words:[
    ['🛏️','bed','床'],['🪑','chair','椅子'],['🚪','door','门'],['🪟','window','窗户'],
    ['☕','cup','杯子'],['🥄','spoon','勺子'],['⚽','ball','球'],['📖','book','书'],
    ['🧸','teddy bear','泰迪熊'],['🎈','balloon','气球'],
    ['🪥','toothbrush','牙刷'],['🧼','soap','香皂'],['🧹','broom','扫帚'],['🛁','bathtub','浴缸']]},
  { id:'veggies', en:'Vegetables', zh:'蔬菜', ic:'🥕', words:[
    ['🥕','carrot','胡萝卜'],['🍅','tomato','西红柿'],['🌽','corn','玉米'],['🥔','potato','土豆'],
    ['🥒','cucumber','黄瓜'],['🧅','onion','洋葱'],['🍄','mushroom','蘑菇'],['🥦','broccoli','西兰花'],
    ['🍆','eggplant','茄子'],['🫑','pepper','彩椒'],['🧄','garlic','大蒜']]},
  { id:'toys', en:'Toys', zh:'玩具', ic:'🧸', words:[
    ['🧸','teddy bear','泰迪熊'],['🎈','balloon','气球'],['🪁','kite','风筝'],['🤖','robot','机器人'],
    ['🧩','puzzle','拼图'],['🪀','yo-yo','悠悠球'],['🎮','game','游戏机'],['🪆','doll','套娃']]},
  { id:'music', en:'Music', zh:'乐器', ic:'🎸', words:[
    ['🎻','violin','小提琴'],['🎸','guitar','吉他'],['🎹','piano','钢琴'],['🥁','drum','鼓'],
    ['🎺','trumpet','小号'],['🎷','saxophone','萨克斯'],['🔔','bell','铃铛'],['🎵','music','音乐']]},
  { id:'sports', en:'Sports', zh:'运动', ic:'⚽', words:[
    ['⚽','ball','足球'],['🏀','basketball','篮球'],['⚾','baseball','棒球'],['🎾','tennis','网球'],
    ['🏸','badminton','羽毛球'],['🏓','ping pong','乒乓球'],['🏊','swim','游泳'],['🏅','medal','奖牌']]},
  { id:'space', en:'Space', zh:'太空', ic:'🚀', words:[
    ['🚀','rocket','火箭'],['🌙','moon','月亮'],['⭐','star','星星'],['☀️','sun','太阳'],
    ['🌍','earth','地球'],['👨‍🚀','astronaut','宇航员'],['👽','alien','外星人'],['🛰️','satellite','卫星'],
    ['🔭','telescope','望远镜'],['☄️','comet','彗星']]},
  { id:'sea', en:'Sea Animals', zh:'海洋动物', ic:'🐳', words:[
    ['🐟','fish','小鱼'],['🐙','octopus','章鱼'],['🐳','whale','鲸鱼'],['🐬','dolphin','海豚'],
    ['🦈','shark','鲨鱼'],['🦀','crab','螃蟹'],['🐢','turtle','乌龟'],['🦐','shrimp','虾'],['🦭','seal','海豹'],
    ['🪼','jellyfish','水母'],['🦞','lobster','龙虾'],['🦑','squid','鱿鱼'],['🐠','tropical fish','热带鱼'],
    ['🐡','pufferfish','河豚'],['🦦','otter','水獭'],['🐚','seashell','贝壳'],['🪸','coral','珊瑚'],
    ['🌟','starfish','海星'],['🐴','seahorse','海马'],['🦪','clam','蛤蜊'],['🥽','stingray','魟鱼'],
    ['🐟','eel','鳗鱼'],['🐳','orca','虎鲸'],['🦀','hermit crab','寄居蟹']]},
  { id:'bugs', en:'Little Bugs', zh:'小昆虫', ic:'🐞', words:[
    ['🦋','butterfly','蝴蝶'],['🐝','bee','蜜蜂'],['🐜','ant','蚂蚁'],['🐞','ladybug','瓢虫'],
    ['🐌','snail','蜗牛'],['🐛','caterpillar','毛毛虫'],['🕷️','spider','蜘蛛'],['🪱','worm','蚯蚓'],
    ['🦗','cricket','蟋蟀'],['🪲','beetle','甲虫'],
    ['🦟','mosquito','蚊子'],['🪰','fly','苍蝇'],['🐝','dragonfly','蜻蜓'],['🦗','grasshopper','蚂蚱'],
    ['🪳','cockroach','蟑螂'],['🦋','moth','飞蛾'],['✨','firefly','萤火虫'],['🐝','wasp','黄蜂'],
    ['🦗','mantis','螳螂'],['🐛','centipede','蜈蚣'],['🦂','scorpion','蝎子'],['🐌','slug','鼻涕虫'],
    ['🐜','termite','白蚁'],['🕸️','web','蜘蛛网'],
    ['🦗','cicada','蝉'],['🐜','flea','跳蚤'],['🐛','silkworm','蚕'],
    ['🪲','earwig','蠼螋'],['🟢','aphid','蚜虫'],['🕷️','tick','蜱虫']]},
  { id:'jobs', en:'Jobs', zh:'职业', ic:'👩‍⚕️', words:[
    ['👩‍⚕️','doctor','医生'],['👨‍🚒','firefighter','消防员'],['👮','police','警察'],['👩‍🏫','teacher','老师'],
    ['👨‍🍳','cook','厨师'],['👨‍🌾','farmer','农民'],['👨‍✈️','pilot','飞行员'],['🎤','singer','歌手']]},
  { id:'sweets', en:'Sweets', zh:'甜甜的', ic:'🍭', words:[
    ['🍬','candy','糖果'],['🍭','lollipop','棒棒糖'],['🍫','chocolate','巧克力'],['🍩','donut','甜甜圈'],
    ['🧁','cupcake','纸杯蛋糕'],['🍿','popcorn','爆米花'],['🥧','pie','派'],['🧇','waffle','华夫饼'],['🥞','pancake','煎饼']]},
  { id:'opposites', en:'Opposites', zh:'反义词', ic:'🔃', words:[
    ['🐘','big','大'],['🐜','small','小'],['🔥','hot','热'],['❄️','cold','冷'],
    ['🚀','fast','快'],['🐌','slow','慢'],['⬆️','up','上'],['⬇️','down','下'],
    ['😊','happy','开心'],['😢','sad','伤心']]},
  { id:'gadgets', en:'Handy Things', zh:'生活小物', ic:'📱', words:[
    ['📱','phone','手机'],['💻','computer','电脑'],['📺','TV','电视'],['📷','camera','相机'],
    ['⌚','watch','手表'],['💡','light','灯'],['🔑','key','钥匙'],['⏰','alarm','闹钟']]},
  { id:'party', en:'Party Time', zh:'派对时光', ic:'🎉', words:[
    ['🎈','balloon','气球'],['🎁','gift','礼物'],['👑','crown','王冠'],['🕯️','candle','蜡烛'],
    ['🎆','firework','烟花'],['🎂','birthday cake','生日蛋糕'],['🎵','music','音乐'],['📷','camera','拍照']]},
  { id:'feelings', en:'Feelings', zh:'心情', ic:'😊', words:[
    ['😊','happy','开心'],['😢','sad','伤心'],['😠','angry','生气'],['😴','sleepy','困了'],
    ['😲','surprised','惊讶'],['😂','laugh','大笑'],['❤️','love','爱'],['😋','yummy','好吃'],
    ['😨','scared','害怕'],['🤪','silly','调皮'],
    ['😤','proud','骄傲'],['😳','shy','害羞'],['🤩','excited','兴奋'],
    ['😐','bored','无聊'],['🥺','lonely','孤单'],['🧐','curious','好奇']]},
  { id:'phrases', en:'Phrases', zh:'日常用语', ic:'💬', words:[
    ['👋','Hello!','你好！'],['👋','Bye-bye!','再见！'],['🙏','Thank you!','谢谢！'],['🌞','Good morning!','早上好！'],
    ['🌙','Good night!','晚安！'],['❤️','I love you!','我爱你！'],['🙋','Yes!','是的！'],['🙅','No!','不！'],
    ['🎂','Happy birthday!','生日快乐！'],['🤝','Sorry!','对不起！'],['🎉','Hooray!','好耶！'],['🍽️','Yummy yummy!','真好吃！'],
    ['🏃','Let\'s go!','走吧！'],['👋','Come here!','过来！'],['⏳','Wait for me!','等等我！'],
    ['🙋','I want...','我想要...'],['💪','I can do it!','我能行！'],['✋','Let me try!','让我试试！'],
    ['🧸','That\'s mine!','那是我的！'],['🛑','Stop it!','停下来！'],['🤫','Be quiet','安静点'],
    ['⚠️','Watch out!','小心！'],['👍','Well done!','做得好！'],['🤷','I don\'t know','我不知道']]},

  { id:'shapes', en:'Shapes', zh:'形状', ic:'🔺', words:[
    ['⭕','circle','圆形'],['🟦','square','正方形'],['🔺','triangle','三角形'],
    ['▬','rectangle','长方形'],['⭐','star','星形'],['❤️','heart','心形'],
    ['🔷','diamond','菱形'],['🥚','oval','椭圆形']]},
  { id:'time', en:'Time', zh:'时间', ic:'⏰', words:[
    ['🌅','morning','早上'],['☀️','afternoon','下午'],['🌇','evening','傍晚'],
    ['🌙','night','晚上'],['📅','today','今天'],['📆','tomorrow','明天'],
    ['⏪','yesterday','昨天'],['⏰','now','现在']]},
  { id:'positions', en:'Positions', zh:'方位', ic:'📍', words:[
    ['📥','in','在里面'],['📤','on','在上面'],['⬇️','under','在下面'],
    ['🔙','behind','在后面'],['🔜','in front of','在前面'],['↔️','next to','在旁边'],
    ['🔀','between','在中间']]},
  { id:'playground', en:'Playground', zh:'游乐场', ic:'🛝', words:[
    ['🛝','slide','滑梯'],['🎠','swing','秋千'],['⚖️','seesaw','跷跷板'],
    ['🏖️','sandbox','沙坑'],['🧗','climbing frame','攀爬架'],['🎡','merry-go-round','旋转木马'],
    ['🪜','ladder','梯子']]},
  { id:'bathroom', en:'Bathroom', zh:'浴室', ic:'🛁', words:[
    ['🧻','toilet paper','卫生纸'],['🪞','mirror','镜子'],['🚿','shower','花洒'],
    ['🧴','shampoo','洗发水'],['🧼','soap','香皂'],['🪥','toothbrush','牙刷'],
    ['🦷','toothpaste','牙膏'],['🧖','towel','毛巾']]},
  { id:'kitchen', en:'Kitchen', zh:'厨房', ic:'🍳', words:[
    ['🍽️','plate','盘子'],['🥣','bowl','碗'],['🍴','fork','叉子'],
    ['🔪','knife','刀'],['🥄','spoon','勺子'],['🧻','napkin','餐巾'],
    ['🧊','fridge','冰箱'],['🔥','oven','烤箱']]},
  { id:'potty', en:'Potty Time', zh:'如厕训练', ic:'🚽', words:[
    ['🚽','potty','小马桶'],['🧻','wipe','擦'],['🧴','flush','冲水'],
    ['🧼','wash hands','洗手'],['👖','pull up pants','提裤子'],['🚰','go potty','去上厕所'],
    ['🪞','all done','好了'],['🧹','clean','干净']]},
];

const ABC = [
  ['A','🍎','apple'],['B','⚽','ball'],['C','🐱','cat'],['D','🐶','dog'],['E','🥚','egg'],
  ['F','🐟','fish'],['G','🍇','grape'],['H','🎩','hat'],['I','🍦','ice cream'],['J','🧃','juice'],
  ['K','🪁','kite'],['L','🦁','lion'],['M','🌙','moon'],['N','👃','nose'],['O','🐙','octopus'],
  ['P','🐷','pig'],['Q','👸','queen'],['R','🌈','rainbow'],['S','☀️','sun'],['T','🐯','tiger'],
  ['U','☂️','umbrella'],['V','🎻','violin'],['W','💧','water'],['X','📦','box'],['Y','💛','yellow'],['Z','🦓','zebra']
];
const ABC_COLORS = ['#ff8c42','#3aa0e0','#7b68d9','#43b85c','#e85d75','#f5a623'];



const SENTENCES = [
  { en:'Greetings', zh:'打招呼', ic:'👋', items:[
    { s:'Good morning, Mommy!', zh:'早上好，妈妈！', imgs:['sunny','mommy'] },
    { s:'Good night, Daddy!', zh:'晚安，爸爸！', imgs:['moon','daddy'] },
    { s:'How are you?', zh:'你好吗？', imgs:['Hello!','happy'] },
    { s:"I'm fine, thank you!", zh:'我很好，谢谢！', imgs:['happy','Thank you!'] },
    { s:'Nice to meet you!', zh:'很高兴认识你！', imgs:['Sorry!'] },
    { s:'See you tomorrow!', zh:'明天见！', imgs:['Bye-bye!','sunny'] }]},
  { en:'Food Time', zh:'吃饭时间', ic:'🍎', items:[
    { s:"I'm hungry.", zh:'我饿了。', imgs:['baby','eat'] },
    { s:'I want an apple.', zh:'我想要一个苹果。', imgs:['baby','apple'] },
    { s:'Yummy! I like bananas.', zh:'真好吃！我喜欢香蕉。', imgs:['yummy','banana'] },
    { s:'Drink some water, please.', zh:'请喝点水。', imgs:['drink','water'] },
    { s:'More, please!', zh:'再来一点，谢谢！', imgs:['eat','Thank you!'] },
    { s:"I'm full.", zh:'我吃饱了。', imgs:['happy','eat'] }]},
  { en:'Daily Routine', zh:'日常起居', ic:'🛏️', items:[
    { s:'Wash your hands.', zh:'洗洗手。', imgs:['hand','water'] },
    { s:'Brush your teeth.', zh:'刷刷牙。', imgs:['toothbrush','tooth'] },
    { s:"Let's take a bath!", zh:'洗澡啦！', imgs:['bathtub'] },
    { s:'Time for bed.', zh:'该睡觉了。', imgs:['moon','bed'] },
    { s:'Wake up!', zh:'起床啦！', imgs:['alarm','sunny'] },
    { s:'Put on your shoes.', zh:'穿上鞋子。', imgs:['shoe','foot'] }]},
  { en:'Move!', zh:'动一动', ic:'🏃', items:[
    { s:'Stand up!', zh:'站起来！', imgs:['standing'] },
    { s:'Sit down!', zh:'坐下！', imgs:['chair'] },
    { s:'Clap your hands!', zh:'拍拍手！', imgs:['clap'] },
    { s:'Jump, jump!', zh:'跳一跳！', imgs:['jump'] },
    { s:'Run, run, run!', zh:'跑跑跑！', imgs:['run'] },
    { s:'Turn around!', zh:'转个圈！', imgs:['dance'] },
    { s:'Give me a hug!', zh:'抱抱我！', imgs:['hug'] },
    { s:'Wave bye-bye!', zh:'挥手再见！', imgs:['Bye-bye!'] }]},
  { en:'Out & About', zh:'出门啦', ic:'🚶', items:[
    { s:"Let's go out!", zh:'我们出门吧！', imgs:['door','shoe'] },
    { s:'Hold my hand.', zh:'牵着我的手。', imgs:['hand'] },
    { s:'Look, a bus!', zh:'看，公交车！', imgs:['eye','bus'] },
    { s:'Be careful!', zh:'小心哦！', imgs:['surprised'] },
    { s:'Put on your coat.', zh:'穿上外套。', imgs:['coat'] },
    { s:"It's raining. Take the umbrella!", zh:'下雨了，带上伞！', imgs:['rainy','umbrella'] }]},
  { en:'Play Time', zh:'玩耍时间', ic:'🧸', items:[
    { s:"Let's play with the ball!", zh:'我们玩球吧！', imgs:['ball'] },
    { s:"It's my turn.", zh:'轮到我啦。', imgs:['baby'] },
    { s:'Can I have the teddy bear?', zh:'可以给我泰迪熊吗？', imgs:['teddy bear'] },
    { s:"Let's do the puzzle!", zh:'一起拼拼图吧！', imgs:['puzzle'] },
    { s:'Good job! High five!', zh:'真棒！击个掌！', imgs:['clap','hand'] },
    { s:'Clean up, clean up!', zh:'收拾玩具啦！', imgs:['box','teddy bear'] }]},
  { en:'Getting Dressed', zh:'穿衣啦', ic:'👕', items:[
    { s:'Time to get dressed!', zh:'该穿衣服啦！', imgs:['shirt'] },
    { s:'Arms up!', zh:'举起小手！', imgs:['hand'] },
    { s:'Put on your shirt.', zh:'穿上上衣。', imgs:['shirt'] },
    { s:'Where are your socks?', zh:'袜子在哪里呀？', imgs:['sock'] },
    { s:'Put on your pants.', zh:'穿上裤子。', imgs:['pants'] },
    { s:'Wow, you look great!', zh:'哇，真好看！', imgs:['happy','dress'] },
    { s:'Button up your shirt.', zh:'扣上扣子。', imgs:['shirt'] },
    { s:'Zip up your jacket.', zh:'拉上拉链。', imgs:['coat'] },
    { s:'Tie your shoes.', zh:'系鞋带。', imgs:['shoe'] },
    { s:'Take off your hat.', zh:'摘下帽子。', imgs:['hat'] }]},
  { en:'Bath Time', zh:'洗澡啦', ic:'🛁', items:[
    { s:"It's bath time!", zh:'洗澡时间到！', imgs:['bathtub'] },
    { s:'The water is warm.', zh:'水暖暖的。', imgs:['water'] },
    { s:'Splash, splash!', zh:'哗啦哗啦！', imgs:['water','duck'] },
    { s:'Wash with soap.', zh:'打上香皂洗一洗。', imgs:['soap'] },
    { s:'Wash your hair.', zh:'洗洗头发。', imgs:['baby','bathtub'] },
    { s:'All clean!', zh:'洗得干干净净！', imgs:['happy','soap'] }]},
  { en:'Bedtime', zh:'晚安啦', ic:'🌙', items:[
    { s:"Let's read a book.", zh:'我们读本书吧。', imgs:['book'] },
    { s:'Goodnight, teddy!', zh:'晚安，小熊！', imgs:['teddy bear','moon'] },
    { s:'Close your eyes.', zh:'闭上眼睛。', imgs:['eye','sleepy'] },
    { s:'Sweet dreams!', zh:'做个好梦！', imgs:['sleepy','star'] },
    { s:'One more hug!', zh:'再抱一个！', imgs:['hug'] },
    { s:'I love you. Goodnight!', zh:'我爱你，晚安！', imgs:['love','moon'] }]},
  { en:'Shopping', zh:'逛超市', ic:'🛒', items:[
    { s:"Let's go shopping!", zh:'我们去买东西吧！', imgs:['cart'] },
    { s:'We need apples.', zh:'我们要买苹果。', imgs:['apple','cart'] },
    { s:'Put it in the cart.', zh:'放进购物车里。', imgs:['cart'] },
    { s:'One banana, please.', zh:'请给我一根香蕉。', imgs:['banana'] },
    { s:'Do you want milk?', zh:'要不要牛奶呀？', imgs:['milk'] },
    { s:"All done! Let's go home.", zh:'买好啦，回家喽！', imgs:['cart','door'] }]},
  { en:'Little Helper', zh:'小帮手', ic:'🧹', items:[
    { s:'Can you help me?', zh:'能帮帮我吗？', imgs:['baby','Thank you!'] },
    { s:'Put the toys away.', zh:'把玩具收起来。', imgs:['teddy bear','box'] },
    { s:'Sweep, sweep!', zh:'扫一扫！', imgs:['broom'] },
    { s:'Water the flowers.', zh:'给花浇浇水。', imgs:['flower','water'] },
    { s:'Give it to Mommy.', zh:'递给妈妈。', imgs:['mommy'] },
    { s:'What a good helper!', zh:'真是个好帮手！', imgs:['clap','medal'] },
    { s:'Make your bed.', zh:'整理床铺。', imgs:['bed'] },
    { s:'Set the table.', zh:'摆好碗筷。', imgs:['plate','fork','spoon'] },
    { s:'Fold the clothes.', zh:'叠衣服。', imgs:['shirt'] },
    { s:'Feed the fish.', zh:'喂鱼。', imgs:['fish'] }]},
  { en:'In the Park', zh:'公园里', ic:'🌳', items:[
    { s:'Look at the butterfly!', zh:'看那只蝴蝶！', imgs:['butterfly'] },
    { s:"Let's fly the kite!", zh:'我们放风筝吧！', imgs:['kite'] },
    { s:'The flower is pretty!', zh:'这朵花真漂亮！', imgs:['flower'] },
    { s:'Watch the birds!', zh:'看小鸟！', imgs:['bird'] },
    { s:"Let's run on the grass!", zh:'我们去草地上跑一跑！', imgs:['run','tree'] },
    { s:'Time to go home.', zh:'该回家啦。', imgs:['standing','door'] }]},
  { en:'Weather Talk', zh:'天气小话题', ic:'⛅', items:[
    { s:"It's sunny today!", zh:'今天是晴天！', imgs:['sunny'] },
    { s:"It's raining!", zh:'下雨啦！', imgs:['rainy'] },
    { s:'Look at the rainbow!', zh:'看彩虹！', imgs:['rainbow'] },
    { s:"It's cold. Put on your coat!", zh:'好冷，穿上外套！', imgs:['snowy','coat'] },
    { s:'The wind is blowing!', zh:'刮风啦！', imgs:['windy'] },
    { s:'I see the moon!', zh:'我看到月亮啦！', imgs:['moon'] }]},
  { en:'Animal Friends', zh:'动物朋友', ic:'🐶', items:[
    { s:'The dog says woof woof!', zh:'小狗汪汪叫！', imgs:['dog'] },
    { s:'The cat says meow!', zh:'小猫喵喵叫！', imgs:['cat'] },
    { s:'Look, a big elephant!', zh:'看，好大的大象！', imgs:['elephant'] },
    { s:'The bird can fly!', zh:'小鸟会飞！', imgs:['bird'] },
    { s:'I like pandas!', zh:'我喜欢熊猫！', imgs:['panda'] },
    { s:'The fish can swim!', zh:'小鱼会游泳！', imgs:['fish','swim'] }]},
  { en:'My Words', zh:'我的心里话', ic:'💖', items:[
    { s:'I love you, Mommy!', zh:'我爱你，妈妈！', imgs:['love','mommy'] },
    { s:"I'm happy!", zh:'我很开心！', imgs:['happy'] },
    { s:"I'm sleepy.", zh:'我困了。', imgs:['sleepy'] },
    { s:'Help me, please!', zh:'请帮帮我！', imgs:['baby','Thank you!'] },
    { s:'Look at me!', zh:'看看我！', imgs:['eye'] },
    { s:'This is my teddy bear.', zh:'这是我的泰迪熊。', imgs:['baby','teddy bear'] },
    { s:"Let's play together!", zh:'一起玩吧！', imgs:['ball','balloon'] }]},
  { en:'Potty Time', zh:'如厕时间', ic:'🚽', items:[
    { s:"I need to go potty!", zh:'我要上厕所！', imgs:['potty'] },
    { s:"Hurry, hurry!", zh:'快快快！', imgs:['hurry'] },
    { s:"Pull down your pants.", zh:'脱裤子。', imgs:['pants'] },
    { s:"Flush the toilet!", zh:'冲马桶！', imgs:['water'] },
    { s:"Wash your hands.", zh:'洗手。', imgs:['hand','water'] },
    { s:"All done! Good job!", zh:'上好啦！真棒！', imgs:['happy','clap'] }]},
  { en:'Getting Sick', zh:'生病了', ic:'🩹', items:[
    { s:"I don't feel well.", zh:'我不舒服。', imgs:['sad'] },
    { s:"I have a cough.", zh:'我咳嗽了。', imgs:['cough'] },
    { s:'Let me take your temperature.', zh:'量量体温。', imgs:['thermometer'] },
    { s:'Open your mouth. Say "Ahh~"', zh:'张嘴，说"啊~"。', imgs:['mouth'] },
    { s:"It's time to take medicine.", zh:'该吃药了。', imgs:['medicine'] },
    { s:"You'll feel better soon!", zh:'很快就好啦！', imgs:['happy','hug'] }]},
  { en:'On the Way', zh:'在路上', ic:'🚗', items:[
    { s:"Fasten your seatbelt!", zh:'系好安全带！', imgs:['car'] },
    { s:"Here comes the bus!", zh:'公交车来了！', imgs:['bus'] },
    { s:"Look out the window!", zh:'看窗外！', imgs:['window'] },
    { s:"We're here!", zh:'到啦！', imgs:['happy'] },
    { s:"Get in the car.", zh:'上车。', imgs:['car'] },
    { s:"Get out of the car.", zh:'下车。', imgs:['car'] }]},

];

/* Each song: lines for display; mel = per-line syllables [text, note, beats]; 'CLAP' = clap sound */
const CHANTS = [
  { title:'Twinkle Twinkle', zh:'小星星', ic:'⭐', bpm:100, lines:[
    'Twinkle, twinkle, little star,','How I wonder what you are!',
    'Up above the world so high,','Like a diamond in the sky.',
    'Twinkle, twinkle, little star,','How I wonder what you are!'],
    mel:[
    [['Twin','C4',1],['kle','C4',1],['twin','G4',1],['kle','G4',1],['lit','A4',1],['tle','A4',1],['star','G4',2]],
    [['How','F4',1],['I','F4',1],['won','E4',1],['der','E4',1],['what','D4',1],['you','D4',1],['are','C4',2]],
    [['Up','G4',1],['a','G4',1],['bove','F4',1],['the','F4',1],['world','E4',1],['so','E4',1],['high','D4',2]],
    [['Like','G4',1],['a','G4',1],['dia','F4',1],['mond','F4',1],['in','E4',1],['the','E4',1],['sky','D4',2]],
    [['Twin','C4',1],['kle','C4',1],['twin','G4',1],['kle','G4',1],['lit','A4',1],['tle','A4',1],['star','G4',2]],
    [['How','F4',1],['I','F4',1],['won','E4',1],['der','E4',1],['what','D4',1],['you','D4',1],['are','C4',2]]]},
  { title:'Rain, Rain, Go Away', zh:'雨啊雨快走开', ic:'🌧️', bpm:92, lines:[
    'Rain, rain, go away,','Come again another day.',
    'Little baby wants to play,','Rain, rain, go away.'],
    mel:[
    [['Rain','G4',1],['rain','E4',1],['go','G4',1],['a','A4',0.5],['way','E4',1.5]],
    [['Come','G4',0.5],['a','G4',0.5],['gain','E4',1],['an','G4',0.5],['oth','A4',0.5],['er','G4',0.5],['day','E4',1.5]],
    [['Lit','G4',0.5],['tle','G4',0.5],['ba','E4',0.5],['by','E4',0.5],['wants','G4',0.5],['to','A4',0.5],['play','E4',1.5]],
    [['Rain','G4',1],['rain','E4',1],['go','G4',1],['a','A4',0.5],['way','E4',1.5]]]},
  { title:'Head, Shoulders, Knees and Toes', zh:'头肩膀膝盖脚', ic:'🙆', bpm:112, lines:[
    'Head, shoulders, knees and toes,','Knees and toes!',
    'Head, shoulders, knees and toes,','Knees and toes!',
    'And eyes and ears and mouth and nose,','Head, shoulders, knees and toes,','Knees and toes!'],
    mel:[
    [['Head','C4',1],['shoul','E4',0.5],['ders','E4',0.5],['knees','G4',1],['and','A4',0.5],['toes','G4',1.5]],
    [['Knees','E4',1],['and','D4',0.5],['toes','C4',1.5]],
    [['Head','C4',1],['shoul','E4',0.5],['ders','E4',0.5],['knees','G4',1],['and','A4',0.5],['toes','G4',1.5]],
    [['Knees','E4',1],['and','D4',0.5],['toes','C4',1.5]],
    [['And','G4',0.5],['eyes','A4',1],['and','A4',0.5],['ears','G4',1],['and','G4',0.5],['mouth','F4',1],['and','F4',0.5],['nose','E4',1.5]],
    [['Head','C4',1],['shoul','E4',0.5],['ders','E4',0.5],['knees','G4',1],['and','A4',0.5],['toes','G4',1.5]],
    [['Knees','E4',1],['and','D4',0.5],['toes','C4',2]]]},
  { title:"If You're Happy", zh:'如果你很开心', ic:'😊', bpm:116, lines:[
    "If you're happy and you know it,",'Clap your hands!','Clap, clap!',
    "If you're happy and you know it,",'Clap your hands!','Clap, clap!',
    "If you're happy and you know it,",'And you really want to show it,',
    "If you're happy and you know it,",'Clap your hands!','Clap, clap!'],
    mel:[
    [['If','C4',0.5],["you're",'C4',0.5],['hap','F4',0.5],['py','F4',0.5],['and','F4',0.5],['you','F4',0.5],['know','A4',0.75],['it','G4',0.75]],
    [['Clap','A4',0.5],['your','G4',0.5],['hands','F4',1]],
    [['CLAP','',0.5],['CLAP','',0.75]],
    [['If','C4',0.5],["you're",'C4',0.5],['hap','F4',0.5],['py','F4',0.5],['and','F4',0.5],['you','F4',0.5],['know','A4',0.75],['it','G4',0.75]],
    [['Clap','A4',0.5],['your','G4',0.5],['hands','F4',1]],
    [['CLAP','',0.5],['CLAP','',0.75]],
    [['If','C4',0.5],["you're",'C4',0.5],['hap','F4',0.5],['py','F4',0.5],['and','F4',0.5],['you','F4',0.5],['know','A4',0.75],['it','G4',0.75]],
    [['And','C4',0.5],['you','C4',0.5],['real','A4',0.5],['ly','A4',0.5],['want','G4',0.5],['to','G4',0.5],['show','F4',0.5],['it','F4',0.75]],
    [['If','C4',0.5],["you're",'C4',0.5],['hap','F4',0.5],['py','F4',0.5],['and','F4',0.5],['you','F4',0.5],['know','A4',0.75],['it','G4',0.75]],
    [['Clap','A4',0.5],['your','G4',0.5],['hands','F4',1]],
    [['CLAP','',0.5],['CLAP','',0.75]]]},

  { title:'The Wheels on the Bus', zh:'公交车的轮子', ic:'🚌', bpm:108, lines:[
    'The wheels on the bus go','Round and round,','Round and round,','Round and round.',
    'The wheels on the bus go','Round and round,','All through the town!'],
    mel:[
    [['The','C4',0.5],['wheels','F4',1],['on','F4',0.5],['the','F4',0.5],['bus','F4',1],['go','A4',1]],
    [['Round','C5',1],['and','A4',0.5],['round','F4',1.5]],
    [['Round','G4',1],['and','E4',0.5],['round','C4',1.5]],
    [['Round','A4',1],['and','G4',0.5],['round','F4',1.5]],
    [['The','C4',0.5],['wheels','F4',1],['on','F4',0.5],['the','F4',0.5],['bus','F4',1],['go','A4',1]],
    [['Round','C5',1],['and','A4',0.5],['round','F4',1.5]],
    [['All','G4',1],['through','G4',0.5],['the','G4',0.5],['town','F4',2]]]},
  { title:'Row Row Row Your Boat', zh:'划船歌', ic:'🚣', bpm:96, lines:[
    'Row, row, row your boat,','Gently down the stream.',
    'Merrily, merrily, merrily, merrily,','Life is but a dream.'],
    mel:[
    [['Row','C4',1],['row','C4',0.75],['row','C4',0.75],['your','D4',0.5],['boat','E4',1.5]],
    [['Gen','E4',0.75],['tly','D4',0.5],['down','E4',0.5],['the','F4',0.5],['stream','G4',2]],
    [['Mer','C5',0.375],['ri','C5',0.375],['li','C5',0.375],['ly','G4',0.375],['mer','A4',0.375],['ri','A4',0.375],['li','A4',0.375],['ly','E4',0.375],['mer','F4',0.375],['ri','F4',0.375],['li','F4',0.375],['ly','C4',0.375]],
    [['Life','G4',0.75],['is','F4',0.5],['but','E4',0.5],['a','D4',0.5],['dream','C4',2]]]},
  { title:'Five Little Ducks', zh:'五只小鸭子', ic:'🦆', bpm:108, lines:[
    'Five little ducks went out one day,','Over the hills and far away.',
    'Mother duck said, quack, quack, quack, quack,','But only four little ducks came back.'],
    mel:[
    [['Five','G4',0.75],['lit','A4',0.5],['tle','G4',0.5],['ducks','E4',0.75],['went','G4',0.5],['out','A4',0.5],['one','G4',0.5],['day','E4',1.5]],
    [['O','G4',0.75],['ver','A4',0.5],['the','G4',0.5],['hills','E4',0.75],['and','G4',0.5],['far','A4',0.5],['a','C5',0.5],['way','B4',1.5]],
    [['Mo','A4',0.5],['ther','G4',0.5],['duck','E4',0.5],['said','G4',0.5],['quack','A4',0.5],['quack','A4',0.5],['quack','A4',0.5],['quack','A4',0.5]],
    [['But','G4',0.75],['on','A4',0.5],['ly','G4',0.5],['four','E4',0.75],['lit','G4',0.5],['tle','A4',0.5],['ducks','G4',0.5],['came','E4',0.5],['back','C4',1.5]]]},
  { title:'Baby Shark', zh:'鲨鱼宝宝', ic:'🦈', bpm:116, lines:[
    'Baby shark, doo doo doo doo doo doo,','Baby shark, doo doo doo doo doo doo,',
    'Baby shark, doo doo doo doo doo doo,','Baby shark!'],
    mel:[
    [['Ba','G4',0.5],['by','G4',0.5],['shark','A4',1],['doo','G4',0.5],['doo','A4',0.5],['doo','G4',0.5],['doo','A4',0.5],['doo','G4',0.5],['doo','A4',0.5]],
    [['Ba','G4',0.5],['by','G4',0.5],['shark','A4',1],['doo','G4',0.5],['doo','A4',0.5],['doo','G4',0.5],['doo','A4',0.5],['doo','G4',0.5],['doo','A4',0.5]],
    [['Ba','G4',0.5],['by','G4',0.5],['shark','A4',1],['doo','G4',0.5],['doo','A4',0.5],['doo','G4',0.5],['doo','A4',0.5],['doo','G4',0.5],['doo','A4',0.5]],
    [['Ba','G4',0.5],['by','G4',0.5],['shark','A4',2]]]},

  { title:'Open Shut Them', zh:'打开合上', ic:'👏', bpm:108, lines:[
    'Open, shut them, open, shut them,','Give a little clap, clap, clap.',
    'Open, shut them, open, shut them,','Put them in your lap, lap, lap.'],
    mel:[
    [['O','C4',0.5],['pen','C4',0.5],['shut','G4',0.5],['them','G4',0.5],['o','A4',0.5],['pen','A4',0.5],['shut','G4',1]],
    [['Give','F4',0.5],['a','F4',0.5],['lit','E4',0.5],['tle','E4',0.5],['clap','D4',0.5],['clap','D4',0.5],['clap','C4',1]],
    [['O','C4',0.5],['pen','C4',0.5],['shut','G4',0.5],['them','G4',0.5],['o','A4',0.5],['pen','A4',0.5],['shut','G4',1]],
    [['Put','F4',0.5],['them','F4',0.5],['in','E4',0.5],['your','E4',0.5],['lap','D4',0.5],['lap','D4',0.5],['lap','C4',1]]]},
  { title:'Walking Walking', zh:'走走走', ic:'🚶', bpm:120, lines:[
    'Walking, walking, walking, walking.','Hop, hop, hop, hop, hop, hop.',
    'Running, running, running, running, running, running.','Tiptoe, tiptoe, tiptoe, tiptoe.',
    'Walking, walking, walking, walking.','Hop, hop, hop, hop, hop, hop.',
    'Running, running, running, running, running, running.','Tiptoe, tiptoe, tiptoe, tiptoe.'],
    mel:[
    [['Wal','C4',0.5],['king','C4',0.5],['wal','C4',0.5],['king','C4',0.5],['wal','C4',0.5],['king','C4',0.5],['wal','C4',0.5],['king','C4',0.5]],
    [['Hop','G4',0.25],['hop','G4',0.25],['hop','G4',0.25],['hop','G4',0.25],['hop','G4',0.25],['hop','G4',0.25]],
    [['Run','A4',0.25],['ning','A4',0.25],['run','A4',0.25],['ning','A4',0.25],['run','A4',0.25],['ning','A4',0.25],['run','A4',0.25],['ning','A4',0.25],['run','A4',0.25],['ning','A4',0.25],['run','A4',0.25],['ning','A4',0.25]],
    [['Tip','E4',0.5],['toe','E4',0.5],['tip','E4',0.5],['toe','E4',0.5]],
    [['Wal','C4',0.5],['king','C4',0.5],['wal','C4',0.5],['king','C4',0.5],['wal','C4',0.5],['king','C4',0.5],['wal','C4',0.5],['king','C4',0.5]],
    [['Hop','G4',0.25],['hop','G4',0.25],['hop','G4',0.25],['hop','G4',0.25],['hop','G4',0.25],['hop','G4',0.25]],
    [['Run','A4',0.25],['ning','A4',0.25],['run','A4',0.25],['ning','A4',0.25],['run','A4',0.25],['ning','A4',0.25],['run','A4',0.25],['ning','A4',0.25],['run','A4',0.25],['ning','A4',0.25],['run','A4',0.25],['ning','A4',0.25]],
    [['Tip','E4',0.5],['toe','E4',0.5],['tip','E4',0.5],['toe','E4',0.5]]]},
  { title:'One Little Finger', zh:'一根小手指', ic:'☝️', bpm:100, lines:[
    'One little finger tap, tap, tap.','Point to the ceiling, point to the floor.',
    'Put it on your head, your head, your head.','One little finger tap, tap, tap.'],
    mel:[
    [['One','C4',1],['lit','C4',0.5],['tle','C4',0.5],['fin','G4',0.5],['ger','G4',0.5],['tap','A4',0.5],['tap','A4',0.5],['tap','G4',1]],
    [['Point','F4',0.5],['to','F4',0.5],['the','E4',0.5],['ceil','E4',1],['ing','E4',0.5],['point','D4',0.5],['to','D4',0.5],['the','C4',0.5],['floor','C4',1]],
    [['Put','G4',0.5],['it','G4',0.5],['on','A4',0.5],['your','A4',0.5],['head','G4',1],['your','A4',0.5],['head','G4',1],['your','A4',0.5],['head','G4',1]],
    [['One','C4',1],['lit','C4',0.5],['tle','C4',0.5],['fin','G4',0.5],['ger','G4',0.5],['tap','A4',0.5],['tap','A4',0.5],['tap','G4',1]]]},
  { title:'Hello Hello!', zh:'你好你好', ic:'👋', bpm:112, lines:[
    'Hello, hello, hello, how are you?','Hello, hello, hello, how are you?',
    "I'm good, I'm great, I'm wonderful!",
    'Can you clap your hands?','Clap, clap, clap!',
    'Can you stomp your feet?','Stomp, stomp, stomp!'],
    mel:[
    [['Hel','C4',0.5],['lo','C4',0.5],['hel','G4',0.5],['lo','G4',0.5],['hel','A4',0.5],['lo','A4',0.5],['how','G4',0.5],['are','F4',0.5],['you','E4',1]],
    [['Hel','C4',0.5],['lo','C4',0.5],['hel','G4',0.5],['lo','G4',0.5],['hel','A4',0.5],['lo','A4',0.5],['how','G4',0.5],['are','F4',0.5],['you','E4',1]],
    [["I'm",'G4',0.5],['good','A4',0.5],["I'm",'G4',0.5],['great','A4',0.5],["I'm",'G4',0.5],['won','A4',0.5],['der','G4',0.5],['ful','F4',1]],
    [['Can','C4',0.5],['you','C4',0.5],['clap','G4',0.5],['your','G4',0.5],['hands','A4',1]],
    [['Clap','G4',0.5],['clap','G4',0.5],['clap','G4',1]],
    [['Can','C4',0.5],['you','C4',0.5],['stomp','G4',0.5],['your','G4',0.5],['feet','A4',1]],
    [['Stomp','G4',0.5],['stomp','G4',0.5],['stomp','G4',1]]]},
  { title:'Yes, I Can!', zh:'我能行', ic:'💪', bpm:108, lines:[
    'Birdie, birdie, can you fly?','Yes, I can! Yes, I can!',
    'Fishy, fishy, can you swim?','Yes, I can! Yes, I can!',
    'Monkey, monkey, can you swing?','Yes, I can! Yes, I can!',
    "I can't fly, but I can sing!",'La la la la la la la!'],
    mel:[
    [['Bir','C4',0.5],['die','C4',0.5],['bir','G4',0.5],['die','G4',0.5],['can','A4',0.5],['you','A4',0.5],['fly','G4',1]],
    [['Yes','G4',0.5],['I','G4',0.5],['can','G4',1],['Yes','A4',0.5],['I','A4',0.5],['can','A4',1]],
    [['Fi','C4',0.5],['shy','C4',0.5],['fi','G4',0.5],['shy','G4',0.5],['can','A4',0.5],['you','A4',0.5],['swim','G4',1]],
    [['Yes','G4',0.5],['I','G4',0.5],['can','G4',1],['Yes','A4',0.5],['I','A4',0.5],['can','A4',1]],
    [['Mon','C4',0.5],['key','C4',0.5],['mon','G4',0.5],['key','G4',0.5],['can','A4',0.5],['you','A4',0.5],['swing','G4',1]],
    [['Yes','G4',0.5],['I','G4',0.5],['can','G4',1],['Yes','A4',0.5],['I','A4',0.5],['can','A4',1]],
    [["I",'C4',0.5],["can't",'C4',0.5],['fly','G4',0.5],['but','G4',0.5],['I','A4',0.5],['can','A4',0.5],['sing','G4',1]],
    [['La','G4',0.5],['la','A4',0.5],['la','G4',0.5],['la','A4',0.5],['la','G4',0.5],['la','A4',0.5],['la','G4',1]]]},
  { title:'Little Snowflake', zh:'小雪花', ic:'❄️', bpm:90, lines:[
    'Little snowflake falling on the ground,','Little snowflake falling down.',
    'Little snowflake falling on the ground,','Falling down, falling down.'],
    mel:[
    [['Lit','C4',1],['tle','D4',1],['snow','E4',1.5],['flake','E4',0.5],['fall','F4',1],['ing','E4',1],['on','D4',1],['the','D4',0.5],['ground','C4',1.5]],
    [['Lit','C4',1],['tle','D4',1],['snow','E4',1.5],['flake','E4',0.5],['fall','D4',1],['ing','D4',1],['down','C4',2]],
    [['Lit','C4',1],['tle','D4',1],['snow','E4',1.5],['flake','E4',0.5],['fall','F4',1],['ing','E4',1],['on','D4',1],['the','D4',0.5],['ground','C4',1.5]],
    [['Fall','D4',1],['ing','D4',1],['down','C4',1],['fall','D4',1],['ing','C4',1],['down','C4',2]]]},
];


/* Real audio files for songs (SSS recordings) */
