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

#cur.execute("SELECT * FROM user_details;")
try:
    cur.execute("select * from user_details;")
    
    d=cur.fetchall()
    for i in range(len(d)):
        print(*d[i], sep="      ")
    cur.execute("call user_det();")
    print(cur.fetchall())
except (Exception, psycopg2.DatabaseError) as error:
        print(error)
finally:
    if conn is not None:
        conn.close()

#cur.execute("call add_user(912, 'Tirth', 'Rapper', 567, 987, 'toxic@gmail.com');")
#cur.execute("select * from user_details")


#print(cur.fetchall())

#d=cur.fetchall()
#for i in range(len(d)):
#    print(*d[i], sep="      ")
#conn.commit()
cur.close()

conn.close()
