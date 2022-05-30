
<?
require_once('connect.php');



if (isset($_GET['lastchance'])) {
    try{
        // Создать подготовленную выписку
        $sql = "INSERT INTO orders (num) VALUES (1) ";
        $stmt = $pdo->prepare($sql);
        
        // Привязать параметры к оператору
        
        // $stmt->bindParam(':nameg', $_REQUEST['name_ins']);
        // $stmt->bindParam(':descripteg', $_REQUEST['desc_ins']);
        // $stmt->bindParam(':rateg', $_REQUEST['rate_ins']);
        // $stmt->bindParam(':genreg', $_REQUEST['genre_ins']);
        
        // Выполнить подготовленный оператор
        $stmt->execute();
        echo "Записи успешно вставлены.";
    } catch(PDOException $e){
        die("Ошибка вставки $sql. " . $e->getMessage());
    }
}
?>