

var salaries;
function load_salaries() {
    let salaries = new p5.Table();
newRow = new p5.TableRow('2003-04,Cleveland Cavaliers,NBA,$4018920,Lebron James',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2004-05,Cleveland Cavaliers,NBA,$4320360,Lebron James',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2005-06,Cleveland Cavaliers,NBA,$4621800,Lebron James',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2006-07,Cleveland Cavaliers,NBA,$5828090,Lebron James',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2007-08,Cleveland Cavaliers,NBA,$13041250,Lebron James',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2008-09,Cleveland Cavaliers,NBA,$14410581,Lebron James',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2009-10,Cleveland Cavaliers,NBA,$15779912,Lebron James',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2010-11,Miami Heat,NBA,$14500000,Lebron James',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2011-12,Miami Heat,NBA,$16022500,Lebron James',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2012-13,Miami Heat,NBA,$17545000,Lebron James',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2013-14,Miami Heat,NBA,$19067500,Lebron James',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2014-15,Cleveland Cavaliers,NBA,$20644400,Lebron James',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2015-16,Cleveland Cavaliers,NBA,$22971000,Lebron James',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2016-17,Cleveland Cavaliers,NBA,$30963450,Lebron James',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2017-18,Cleveland Cavaliers,NBA,$33285709,Lebron James',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('1984-85,Chicago Bulls,NBA,$550000,Michael Jordan',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('1985-86,Chicago Bulls,NBA,$630000,Michael Jordan',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('1987-88,Chicago Bulls,NBA,$845000,Michael Jordan',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('1988-89,Chicago Bulls,NBA,$2000000,Michael Jordan',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('1989-90,Chicago Bulls,NBA,$2500000,Michael Jordan',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('1990-91,Chicago Bulls,NBA,$2500000,Michael Jordan',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('1991-92,Chicago Bulls,NBA,$3250000,Michael Jordan',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('1992-93,Chicago Bulls,NBA,$4000000,Michael Jordan',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('1993-94,Chicago Bulls,NBA,$4000000,Michael Jordan',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('1994-95,Chicago Bulls,NBA,$3850000,Michael Jordan',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('1995-96,Chicago Bulls,NBA,$3850000,Michael Jordan',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('1996-97,Chicago Bulls,NBA,$30140000,Michael Jordan',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('1997-98,Chicago Bulls,NBA,$33140000,Michael Jordan',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2001-02,Washington Wizards,NBA,$1000000,Michael Jordan',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2002-03,Washington Wizards,NBA,$1030000,Michael Jordan',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('1996-97,Los Angeles Lakers,NBA,$1015000,Kobe Bryant',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('1997-98,Los Angeles Lakers,NBA,$1167240,Kobe Bryant',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('1998-99,Los Angeles Lakers,NBA,$1319000,Kobe Bryant',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('1999-00,Los Angeles Lakers,NBA,$9000000,Kobe Bryant',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2000-01,Los Angeles Lakers,NBA,$10130000,Kobe Bryant',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2001-02,Los Angeles Lakers,NBA,$11250000,Kobe Bryant',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2002-03,Los Angeles Lakers,NBA,$12375000,Kobe Bryant',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2003-04,Los Angeles Lakers,NBA,$13500000,Kobe Bryant',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2004-05,Los Angeles Lakers,NBA,$14175000,Kobe Bryant',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2005-06,Los Angeles Lakers,NBA,$15946875,Kobe Bryant',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2006-07,Los Angeles Lakers,NBA,$17718750,Kobe Bryant',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2007-08,Los Angeles Lakers,NBA,$19490625,Kobe Bryant',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2008-09,Los Angeles Lakers,NBA,$21262500,Kobe Bryant',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2009-10,Los Angeles Lakers,NBA,$23034375,Kobe Bryant',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2010-11,Los Angeles Lakers,NBA,$24806250,Kobe Bryant',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2011-12,Los Angeles Lakers,NBA,$25244493,Kobe Bryant',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2012-13,Los Angeles Lakers,NBA,$27849149,Kobe Bryant',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2013-14,Los Angeles Lakers,NBA,$30453805,Kobe Bryant',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2014-15,Los Angeles Lakers,NBA,$23500000,Kobe Bryant',',');
    salaries.addRow(newRow);
newRow = new p5.TableRow('2015-16,Los Angeles Lakers,NBA,$25000000,Kobe Bryan',',');
    salaries.addRow(newRow);
    return salaries;
}
