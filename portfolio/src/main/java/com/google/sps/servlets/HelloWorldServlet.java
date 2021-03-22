package com.google.sps.servlets;

import com.google.gson.Gson;
import java.util.ArrayList;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello2")
public class HelloWorldServlet extends HttpServlet 
{

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException 
  {
    response.setContentType("text/html;");
    ArrayList<String> strings = new ArrayList<String>();
    strings.add("\"spanish\": Hola!");
    strings.add("\"english\": Hello!");
    strings.add("\"french\": Bonjour!");

    String json_string = jsonConversion(strings);

    response.setContentType("application/json;");
    response.getWriter().println(json_string);
  }


private String jsonConversion(ArrayList<String> strings) 
{
    Gson gson = new Gson();
    String json = gson.toJson(strings);
    return json;
  }
}
