defmodule AgileFlow.ScoreGame do
  use GenServer
  alias AgileFlowWeb.Endpoint

  def start_link(), do: GenServer.start_link(__MODULE__, [], [name: __MODULE__])
  def init(_), do: {:ok, {:general_score, 0} }

  def assert(), do: GenServer.cast( __MODULE__, {:assert} )
  def fail(), do: GenServer.cast( __MODULE__, {:fail} )

  def handle_cast( {:assert}, state) do
    {_, score} = state
    next_score = score+1
    #IO.puts "Score: #{next_score}"
    play_everything( next_score )
    Endpoint.broadcast "main::start", "main::score", %{ score: next_score}
    {:noreply, {:general_score, next_score} }
  end

  def handle_cast( {:fail}, state) do
    {_, score} = state
    next_score = decrement_score( score )
    #IO.puts "Score: #{next_score}"
    Endpoint.broadcast "main::start", "main::score", %{ score: next_score}
    IO.puts "SCORE:: Silenciando!"
    Endpoint.broadcast "main::start", "main::stop_all", %{ msg: "fallaron" }
    {:noreply, {:general_score, next_score} }
  end

  def decrement_score( 0 ), do: 0
  def decrement_score( score ), do: score-1

  def play_everything( 6 ), do: Endpoint.broadcast "main::start", "main::play_all", %{ msg: "suenen todos!"}
  def play_everything( _ ), do: :continue
end
