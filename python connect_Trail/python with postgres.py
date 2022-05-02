import psycopg2
import psycopg2.extras
conn = psycopg2.connect(
    host="localhost",
    database="my_database",
    user="my_user",
    password="root")
cur=conn.cursor()
 #cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

#cur.execute("CREATE TABLE student (id SERIAL PRIMARY KEY, name VARCHAR);")
#cur.execute("INSERT INTO student (name) VALUES(%s)", ("Tirth",))
#cur.execute("INSERT INTO student (name) VALUES(%s)", ("Rushali",))
#cur.execute("INSERT INTO student (name) VALUES(%s)", ("Akshil",))
#cur.execute("INSERT INTO student (name) VALUES(%s)", ("Ushmay",))
#cur.execute("INSERT INTO user_details (name) VALUES(%s)", ("Ushmay",))
#f=open("procedure _conn.txt", "r")

cur.execute("SELECT * FROM user_details;")
#cur.callproc('user_det')
#cur.execute("call user_det();")

#print(cur.fetchall())

d=cur.fetchall()
for i in range(len(d)):
    print(*d[i], sep="      ")
conn.commit()
cur.close()

conn.close()
