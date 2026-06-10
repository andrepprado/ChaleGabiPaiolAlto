import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

/**
 * Servidor Java simples para rodar o site clássico em localhost.
 *
 * Como usar a partir da pasta do projeto:
 * 1) javac java/ChaleGabiServer.java
 * 2) java -cp java ChaleGabiServer
 * 3) abrir http://localhost:8080
 */
public class ChaleGabiServer {
    private static final int PORT = 8080;
    private static final Path WEB_ROOT = Paths.get(".").toAbsolutePath().normalize();

    public static void main(String[] args) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);
        server.createContext("/", ChaleGabiServer::handleRequest);
        server.setExecutor(null);
        server.start();
        System.out.println("Chalé Gabi rodando em http://localhost:" + PORT);
        System.out.println("Pasta servida: " + WEB_ROOT);
    }

    private static void handleRequest(HttpExchange exchange) throws IOException {
        if (!"GET".equalsIgnoreCase(exchange.getRequestMethod())) {
            exchange.sendResponseHeaders(405, -1);
            return;
        }

        String requestedPath = exchange.getRequestURI().getPath();
        if (requestedPath == null || requestedPath.equals("/")) {
            requestedPath = "/index.html";
        }

        Path filePath = WEB_ROOT.resolve(requestedPath.substring(1)).normalize();
        if (!filePath.startsWith(WEB_ROOT) || !Files.exists(filePath) || Files.isDirectory(filePath)) {
            sendNotFound(exchange);
            return;
        }

        byte[] response = Files.readAllBytes(filePath);
        exchange.getResponseHeaders().set("Content-Type", contentType(filePath));
        exchange.sendResponseHeaders(200, response.length);
        try (OutputStream output = exchange.getResponseBody()) {
            output.write(response);
        }
    }

    private static void sendNotFound(HttpExchange exchange) throws IOException {
        byte[] response = "Arquivo não encontrado".getBytes();
        exchange.getResponseHeaders().set("Content-Type", "text/plain; charset=utf-8");
        exchange.sendResponseHeaders(404, response.length);
        try (OutputStream output = exchange.getResponseBody()) {
            output.write(response);
        }
    }

    private static String contentType(Path path) {
        String file = path.getFileName().toString().toLowerCase();
        if (file.endsWith(".html")) return "text/html; charset=utf-8";
        if (file.endsWith(".css")) return "text/css; charset=utf-8";
        if (file.endsWith(".js")) return "application/javascript; charset=utf-8";
        if (file.endsWith(".jpg") || file.endsWith(".jpeg")) return "image/jpeg";
        if (file.endsWith(".png")) return "image/png";
        if (file.endsWith(".svg")) return "image/svg+xml";
        if (file.endsWith(".webp")) return "image/webp";
        return "application/octet-stream";
    }
}
